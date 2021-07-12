const { Admin, User, Site, Opentime } = require("@src/mongoose/Noise");
const bcrypt = require("bcrypt");
const { GraphQLUpload } = require("graphql-upload");
const ftp = require("basic-ftp");
const { ftpConnectFun, uploadFTP, deleteFTP, downloadFTP } = require("@src/libs/ftpFuns.js");
const { createToken, checkTokenFun } = require("@src/libs/funs.js");

const ftp_host = process.env.ftp_host || "127.0.0.1";
const ftp_port = process.env.ftp_port || 21;
const ftp_dirname = process.env.ftp_dirname || "uploads";
const ftp_user = process.env.ftp_user || "cai_test";
const ftp_pass = process.env.ftp_pass || "123456";

const client = new ftp.Client();
client.ftp.verbose = true;
const ftpConnect = ftpConnectFun(ftp_host, ftp_port, ftp_user, ftp_pass);

const checkToken = checkTokenFun(async (me) => {
  const admin = await Admin.findOne({ _id: me.id });
  if (!admin) throw new Error(JSON.stringify({ type: "accountNoExisted", text: "帳號不存在，請重新登入" }));
});
module.exports = {
  Upload: GraphQLUpload,
  Query: {
    user: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const user = await User.findById(id);
      if (!user) throw new Error(JSON.stringify({ type: "idNoExisted", text: "ID不存在" }));
      return user;
    },
    searchUser: async (root, { casenum, carnum }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢
      const user = await User.findOne({ casenum, carnum });
      if (!user) throw new Error(JSON.stringify({ type: "dataNoExisted", text: "無資料" }));
      return user;
    },
    users: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);
      return await User.find();
    },
    searchUsers_reservation: async (root, { startDate, endDate }, context) => {
      //檢查令牌
      await checkToken(context.token);

      return await User.find({
        reDateS: { $lte: endDate },
        reDateE: { $gte: startDate },
      });
    },
    searchUsers_extension: async (root, { startDate, endDate }, context) => {
      //檢查令牌
      await checkToken(context.token);

      return await User.find({
        exDateS: { $lte: endDate },
        exDateE: { $gte: startDate },
      });
    },
    searchUsers_transfer: async (root, { city }, context) => {
      //檢查令牌
      await checkToken(context.token);
      if (city && city !== "全部") {
        return await User.find({
          city,
        });
      } else {
        return await User.find({
          $and: [
            {
              city: { $ne: null },
            },
            {
              city: { $ne: "" },
            },
          ],
        });
      }
    },
    searchUsers_caseInquiry: async (root, { carnum }, context) => {
      //檢查令牌
      await checkToken(context.token);
      const reg = new RegExp(carnum, "i");
      return await User.find({
        carnum: { $regex: reg },
      });
    },
    sites: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢檢測站點
      return await Site.find();
    },
    searchOpentimes: async (root, { site, startDate, endDate }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const siteDoc = await Site.findOne({ sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //查詢開放時間
      const opentimes = await Opentime.find({
        siteId: siteDoc._id,
        dateS: { $lte: endDate },
        dateE: { $gte: startDate },
      });
      return opentimes;
    },
    verificationToken: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      return true;
    },
    download: async (root, { fileSrc }, context) => {
      //檢查令牌
      await checkToken(context.token);
      if (client.closed) await ftpConnect(client);
      return await downloadFTP(client, fileSrc);
    },
  },
  Mutation: {
    passwordEncrypt: async (root, { password }, context) => {
      //密碼加密
      const SALT_ROUNDS = 2;
      return await bcrypt.hash(password, SALT_ROUNDS);
    },
    login: async (root, { account, password }, context) => {
      //檢查帳號是否存在
      const admin = await Admin.findOne({ account: account });
      if (!admin) throw new Error(JSON.stringify({ type: "accountNoExisted", text: "帳號不存在" }));

      //比對密碼
      const passwordIsValid = await bcrypt.compare(password, admin.password);
      if (!passwordIsValid) throw new Error(JSON.stringify({ type: "passwordError", text: "密碼錯誤" }));

      //建立token
      const token = await createToken({ id: admin._id, email: admin.account, name: admin.name });
      return { token };
    },
    createUser: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //建立使用者
      if (input.postponedProve) {
        const { createReadStream } = await input.postponedProve;
        const stream = createReadStream();
        const dirPath = `/${ftp_dirname}/prove/`;
        const filename = `${input.casenum}-${input.carnum}.jpg`;
        if (client.closed) await ftpConnect(client);
        await uploadFTP(client, stream, dirPath, filename);
        input.postponedProve = dirPath + filename;
      }
      const user = new User(input);
      try {
        await user.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.casenum && e.keyPattern.carnum) {
            throw new Error(JSON.stringify({ type: "casenum_carnumExisted", text: "公文號及車牌號已存在" }));
          }
        }
      }
    },
    importUsers: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //建立使用者群
      const list = input.map((el) => {
        return {
          updateOne: {
            filter: { casenum: el.casenum, carnum: el.carnum },
            update: { $set: el },
            upsert: true,
          },
        };
      });
      await User.bulkWrite(list);

      //取得建立使用者群
      //return await User.find({ casenum: input.map((el) => el.casenum) });
    },
    editUser: async (root, { id, input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const user = await User.findById(id);
      if (!user) throw new Error(JSON.stringify({ type: "idNoExisted", text: "ID不存在" }));
      //編輯使用者
      if (input.postponedProve) {
        const { createReadStream } = await input.postponedProve;
        const stream = createReadStream();
        const dirPath = `/${ftp_dirname}/prove/`;
        const filename = `${user.casenum}-${user.carnum}.jpg`;
        if (client.closed) await ftpConnect(client);
        await uploadFTP(client, stream, dirPath, filename);
        input.postponedProve = dirPath + filename;
      } else if (input.hasOwnProperty("postponedProve")) {
        const src = `/${ftp_dirname}/prove/${user.casenum}-${user.carnum}.jpg`;
        if (client.closed) await ftpConnect(client);
        await deleteFTP(client, src);
        input.postponedProve = null;
      }
      for (let key in input) {
        //user[key] = input[key] !== null && input[key] !== "" ? input[key] : undefined;//刪除key
        user[key] = input[key];
      }
      try {
        await user.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.casenum && e.keyPattern.carnum) {
            throw new Error(JSON.stringify({ type: "casenum_carnumExisted", text: "公文號及車牌號已存在" }));
          }
        }
      }
    },
    deleteUser: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除使用者
      await User.deleteOne({ _id: id });
    },
    deleteUsers: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除使用者
      await User.deleteMany({ _id: id });
    },

    createSite: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //建立檢測站點
      const site = new Site(input);
      try {
        await site.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.sitename) {
            throw new Error(JSON.stringify({ type: "siteExisted", text: "檢測站點已存在" }));
          }
        }
      }
    },
    importSites: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //建立檢測站點群
      const list = input.map((el) => {
        return {
          updateOne: {
            filter: { sitename: el.sitename, address: el.address },
            update: { $set: el },
            upsert: true,
          },
        };
      });
      await Site.bulkWrite(list);
    },
    editSite: async (root, { id, input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const site = await Site.findById(id);
      if (!site) throw new Error(JSON.stringify({ type: "idNoExisted", text: "ID不存在" }));

      //編輯檢測站點
      for (let key in input) {
        site[key] = input[key];
      }
      try {
        await site.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.sitename) {
            throw new Error(JSON.stringify({ type: "siteExisted", text: "檢測站點已存在" }));
          }
        }
      }
    },
    deleteSite: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除檢測站點
      await Site.deleteOne({ _id: id });

      await Opentime.deleteMany({ siteId: id });
    },
    deleteSites: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除檢測站點
      await Site.deleteMany({ _id: id });

      await Opentime.deleteMany({ siteId: id });
    },

    createOpentime: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //取得檢測站點
      const site = await Site.findOne({ sitename: input.site });
      if (!site) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //建立開放時間
      const opentime = new Opentime({
        siteId: site._id,
        dateS: input.dateS,
        dateE: input.dateE,
        maxcount: input.maxcount,
      });
      try {
        await opentime.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.siteId && e.keyPattern.dateS && e.keyPattern.dateE) {
            throw new Error(JSON.stringify({ type: "opentimeExisted", text: "開放時間已存在" }));
          }
        }
      }
    },
    createOpentimes: async (root, { input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const siteList = input.map((el) => Site.findOne({ sitename: el.site }));
      const sites = await Promise.all(siteList);

      const temp_input = input.map((el, index) => {
        delete el.site;
        el.siteId = sites[index]._id;
        return el;
      });

      //建立開放時間群
      const list = temp_input.map((el, index) => {
        return {
          updateOne: {
            filter: { siteId: el.siteId, dateS: el.dateS, dateE: el.dateE },
            update: { $set: el },
            upsert: true,
          },
        };
      });
      await Opentime.bulkWrite(list);
    },
    editOpentime: async (root, { id, input }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const opentime = await Opentime.findById(id);
      if (!opentime) throw new Error(JSON.stringify({ type: "idNoExisted", text: "ID不存在" }));

      //編輯開放時間
      for (let key in input) {
        opentime[key] = input[key];
      }
      try {
        await opentime.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.siteId && e.keyPattern.date) {
            throw new Error(JSON.stringify({ type: "opentimeExisted", text: "開放時間已存在" }));
          }
        }
      }
    },
    deleteOpentime: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除檢測站點
      await Opentime.deleteOne({ _id: id });
    },
    deleteOpentimes: async (root, { id }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //刪除檢測站點
      await Opentime.deleteMany({ _id: id });
    },
  },
};

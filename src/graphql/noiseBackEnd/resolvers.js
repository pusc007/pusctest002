const { Admin, User, Site, Opentime } = require("@src/mongoose/Noise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { GraphQLUpload } = require("graphql-upload");
const ftp = require("basic-ftp");
const stream = require("stream");
const process = require("process");

const ftp_host = process.env.ftp_host || "127.0.0.1";
const ftp_port = process.env.ftp_port || 21;
const ftp_dirname = process.env.ftp_dirname || "uploads";
const ftp_user = process.env.ftp_user || "cai_test";
const ftp_pass = process.env.ftp_pass || "123456";

const client = new ftp.Client();
client.ftp.verbose = true;
const ftpConnect = async (client) => {
  try {
    await client.access({
      host: ftp_host,
      port: ftp_port,
      user: ftp_user,
      password: ftp_pass,
    });
  } catch (e) {
    //console.log(err);
    //throw new Error(JSON.stringify({ type: "error", text: e.message }));
    throw new Error(JSON.stringify({ type: "error", text: "錯誤" }));
  }
};
ftpConnect(client);

const SECRET = "93643860-b464-11eb-8529-0242ac130003";

const createToken = ({ id, email, name }) =>
  jwt.sign({ id, email, name }, SECRET, {
    expiresIn: "1d",
  });
const checkToken = async (token) => {
  if (token) {
    try {
      const me = await jwt.verify(token, SECRET);
      const admin = await Admin.findOne({ _id: me.id });
      if (!admin) throw new Error(JSON.stringify({ type: "accountNoExisted", text: "帳號不存在，請重新登入" }));
    } catch (e) {
      const message = e.message;
      if (message === "invalid token" || message === "invalid signature" || message === "jwt malformed") {
        throw new Error(JSON.stringify({ type: "tokenInvalid", text: "認證有問題，請重新登入" }));
      } else if (message === "jwt expired") {
        throw new Error(JSON.stringify({ type: "tokenExpired", text: "認證已過期，請重新登入" }));
      } else {
        throw new Error(JSON.stringify({ type: "tokenError", text: "認證有錯誤，請重新登入" }));
      }
    }
  } else {
    throw new Error(JSON.stringify({ type: "tokenNoExisted", text: "無認證，請重新登入" }));
  }
};

const uploadFTP = async (client, stream, src) => {
  /*
      const path = "uploads/" + filename;
      stream
        .pipe(fs.createWriteStream(path))
        .on("finish", () => {
          console.log("ok");
        })
        .on("error", (err) => {
          console.log("fail");
        });*/
  if (client.closed) await ftpConnect(client);
  try {
    await client.uploadFrom(stream, src);
  } catch (e) {
    if (e.code === 550) {
      throw new Error(JSON.stringify({ type: "fail", text: "失敗" }));
    } else {
      throw new Error(JSON.stringify({ type: "error", text: e.message }));
    }
  }
};
const deleteFTP = async (client, src) => {
  if (client.closed) await ftpConnect(client);
  try {
    await client.remove(src);
  } catch (e) {
    if (e.code === 550) {
      throw new Error(JSON.stringify({ type: "fail", text: "失敗" }));
    } else {
      throw new Error(JSON.stringify({ type: "error", text: e.message }));
    }
  }
};
const downloadFTP = async (client, src) => {
  if (client.closed) await ftpConnect(client);
  try {
    const r = [];
    const lowCaseTransform = await new stream.Transform();
    lowCaseTransform._transform = async (fileChunk, encoding, callback) => {
      r.push(fileChunk);
      callback();
    };
    lowCaseTransform.pipe(process.stdout);
    await client.downloadTo(lowCaseTransform, src);
    const buffer = Buffer.concat(r);
    return buffer.toString("base64");
  } catch (e) {
    if (e.code === 550) {
      throw new Error(JSON.stringify({ type: "fail", text: "失敗" }));
    } else {
      throw new Error(JSON.stringify({ type: "error", text: e.message }));
    }
  }
};
module.exports = {
  Upload: GraphQLUpload,
  Query: {
    users: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);
      return await User.find();
    },
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
    searchUsers: async (root, { startDate, endDate, state }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //條件查詢
      if (state === "reserv") {
        return await User.find({
          redateS: { $lte: endDate },
          redateE: { $gte: startDate },
        });
      } else if (state === "extend") {
        return await User.find({
          exdateS: { $lte: endDate },
          exdateE: { $gte: startDate },
        });
      } else if (state === "all") {
        return await User.find();
      }
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
        const { createReadStream, mimetype, encoding, filename } = await input.postponedProve;
        const stream = createReadStream();
        const src = `${ftp_dirname}/prove/${input.casenum}-${input.carnum}.jpg`;
        await uploadFTP(client, stream, src);
        input.postponedProve = src;
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
        const { createReadStream, mimetype, encoding, filename } = await input.postponedProve;
        const stream = createReadStream();
        const src = `${ftp_dirname}/prove/${user.casenum}-${user.carnum}.jpg`;
        await uploadFTP(client, stream, src);
        input.postponedProve = src;
      } else if (input.hasOwnProperty("postponedProve")) {
        const src = `${ftp_dirname}/prove/${user.casenum}-${user.carnum}.jpg`;
        await deleteFTP(client, src);
        input.postponedProve = null;
      }
      for (let key in input) {
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

      await Opentime.remove({ siteId: id });
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

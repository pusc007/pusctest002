const { Admin, User, Site, Opentime } = require("@src/mongoose/Noise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
/*console.log(opentimes0);

      const opentimes = await Opentime.aggregate([
        {
          $match: { date: { $gte: new Date(startDate), $lt: new Date(endDate) } },
        },
        {
          $lookup: {
            from: "sites",
            localField: "site",
            foreignField: "_id",
            as: "site",
          },
        },
        {
          $project: {
            id: "$_id",
            site: { $arrayElemAt: ["$site", 0] },
            date: 1,
            maxcount: 1,
            created: 1,
            updated: 1,
          },
        },
        {
          $match: { "site.city": city, "site.sitename": site },
        },
      ]);
      //console.log(opentimes);
      return opentimes;*/
module.exports = {
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
      endDate += 86400000;
      if (state === "reserv") {
        return await User.find({ redate: { $gte: startDate, $lt: endDate } });
      } else if (state === "extend") {
        return await User.find({ exdate: { $gte: startDate, $lt: endDate } });
      } else if (state === "created") {
        return await User.find({ created: { $gte: startDate, $lt: endDate } });
      } else if (state === "updated") {
        return await User.find({ updated: { $gte: startDate, $lt: endDate } });
      } else if (state === "all") {
        return await User.find();
      }
    },

    searchSites: async (root, { city }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢檢測站點
      return await Site.find({ city });
    },

    citys: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      //取得可檢驗縣市
      return await Site.distinct("city");
    },

    searchOpentime: async (root, { city, site, date }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢開放時間
      const siteDoc = await Site.findOne({ city, sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      const opentime = await Opentime.findOne({ siteId: siteDoc._id, date });
      if (!opentime) throw new Error(JSON.stringify({ type: "dataNoExisted", text: "無資料" }));
      return opentime;
    },
    searchOpentimes: async (root, { city, site, startDate, endDate }, context) => {
      //檢查令牌
      await checkToken(context.token);

      const siteDoc = await Site.findOne({ city, sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //查詢開放時間
      endDate += 86400000;
      const opentimes = await Opentime.find({ siteId: siteDoc._id, date: { $gte: startDate, $lt: endDate } });
      return opentimes;
    },
    verificationToken: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      return true;
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
      const user = new User(input);
      try {
        await user.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.casenum) {
            throw new Error(JSON.stringify({ type: "casenumExisted", text: "公文號已存在" }));
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
            filter: { casenum: el.casenum },
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
      for (let key in input) {
        user[key] = input[key];
      }
      try {
        await user.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.casenum) {
            throw new Error(JSON.stringify({ type: "casenumExisted", text: "公文號已存在" }));
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
          if (e.keyPattern.city && e.keyPattern.sitename) {
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
      site.sitename = input.sitename;
      try {
        await site.save();
      } catch (e) {
        if (e.code === 11000) {
          if (e.keyPattern.city && e.keyPattern.sitename) {
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
      const site = await Site.findOne({ city: input.city, sitename: input.site });
      if (!site) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //建立開放時間
      const opentime = new Opentime({ siteId: site._id, date: input.date, maxcount: input.maxcount });
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
  },
};

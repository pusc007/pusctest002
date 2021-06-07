const { Admin, User, Site, Opentime } = require("@src/mongoose/Noise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Queue = require("@src/libs/Queue.js");

const SECRET = "93643860-b464-11eb-8529-0242ac130003";

const createToken = ({ id, email, name }) =>
  jwt.sign({ id, email, name }, SECRET, {
    expiresIn: "1d",
  });

const checkToken = async (token) => {
  if (token) {
    try {
      const me = await jwt.verify(token, SECRET);
      const user = await User.findOne({ _id: me.id });
      if (!user) throw new Error(JSON.stringify({ type: "accountNoExisted", text: "帳號不存在，請重新登入" }));
      return user;
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

const queue = new Queue();
const checkLimit = async (city, site, date) => {
  //取得檢測站點
  const siteDoc = await Site.findOne({ city: city, sitename: site });
  if (!siteDoc) return new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

  //取得開放時間
  const opentime = await Opentime.findOne({ siteId: siteDoc._id, date: date });
  if (!opentime) return new Error(JSON.stringify({ type: "opentimeNoExisted", text: "開放時間不存在" }));

  const redateDocs = await User.aggregate([
    {
      $match: { city, site, redate: { $eq: new Date(date) } },
    },
    { $group: { _id: "$redate", count: { $sum: 1 } } },
  ]);
  const exdateDocs = await User.aggregate([
    {
      $match: { city, site, exdate: { $eq: new Date(date) } },
    },
    { $group: { _id: "$exdate", count: { $sum: 1 } } },
  ]);
  let count = 0;
  if (redateDocs.length) {
    count += redateDocs[0].count;
  }
  if (exdateDocs.length) {
    count += exdateDocs[0].count;
  }
  if (count >= opentime.maxcount) return new Error(JSON.stringify({ type: "limit", text: "超過上限人數" }));
};
module.exports = {
  Query: {
    user: async (root, {}, context) => {
      //檢查令牌
      return await checkToken(context.token);
    },
    searchSites: async (root, { city }, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢檢測站點
      return await Site.find({ city });
    },
    searchOpentimes: async (root, { type, city, site, startDate, endDate }, context) => {
      //檢查令牌
      const user = await checkToken(context.token);

      if (type === "redate" && user.redate) return [];

      if (type === "exdate" && user.exdate) return [];

      const siteDoc = await Site.findOne({ city, sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      if (user.redate) {
        const date0 = new Date(user.redate);
        date0.setDate(date0.getDate() + 1);
        startDate = Math.max(startDate, date0.getTime());
      }
      const dateS = new Date().toISOString().substr(0, 10);
      const date = new Date(dateS);
      date.setDate(date.getDate() + 4);
      startDate = Math.max(startDate, date.getTime());

      endDate += 86400000;
      const redateDocs = await User.aggregate([
        {
          $match: { city, site, redate: { $gte: new Date(startDate), $lt: new Date(endDate) } },
        },
        { $group: { _id: "$redate", count: { $sum: 1 } } },
      ]);
      const exdateDocs = await User.aggregate([
        {
          $match: { city, site, exdate: { $gte: new Date(startDate), $lt: new Date(endDate) } },
        },
        { $group: { _id: "$exdate", count: { $sum: 1 } } },
      ]);
      //console.log(redateDocs, exdateDocs);

      //查詢開放時間
      const opentimes = await Opentime.find({ siteId: siteDoc._id, date: { $gte: startDate, $lt: endDate } });

      return opentimes.map((info) => {
        const s = info.date.toString();
        const redateIndex = redateDocs.findIndex((el) => el._id.toString() === s);
        const redateCount = redateIndex !== -1 ? redateDocs.splice(redateIndex, 1)[0].count : 0;
        const exdateIndex = exdateDocs.findIndex((el) => el._id.toString() === s);
        const exdateCount = exdateIndex !== -1 ? exdateDocs.splice(exdateIndex, 1)[0].count : 0;
        info.count = redateCount + exdateCount;
        return info;
      });
      /*//檢查令牌
      await checkToken(context.token);

      const siteDoc = await Site.findOne({ city, sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //查詢開放時間
      endDate += 86400000;
      const opentimes = await Opentime.find({ siteId: siteDoc._id, date: { $gte: startDate, $lt: endDate } });
      return opentimes;*/
    },
    citys: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      //取得可檢驗縣市
      return await Site.distinct("city");
    },
  },
  Mutation: {
    login: async (root, { casenum, carnum }, context) => {
      const user = await User.findOne({ casenum: casenum, carnum: carnum });
      if (!user) throw new Error(JSON.stringify({ type: "loginError", text: "登入錯誤" }));

      //建立token
      const token = await createToken({ id: user._id, email: user.casenum, name: user.username });
      return { token };
    },
    reservation: async (root, { city, site, date }, context) => {
      const user = await checkToken(context.token);

      if (user.redate) throw new Error(JSON.stringify({ type: "reservation", text: "已預約過" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ city, site, date }, async ({ city, site, date }) => {
        const message = await checkLimit(city, site, date);
        if (!message) {
          user.city = city;
          user.site = site;
          user.redate = date;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    extend: async (root, { date }, context) => {
      const user = await checkToken(context.token);

      if (!user.redate) throw new Error(JSON.stringify({ type: "noReservation", text: "未預約過，請先預約" }));

      if (date < user.redate) throw new Error(JSON.stringify({ type: "extendError", text: "展延失敗" }));

      if (user.exdate) throw new Error(JSON.stringify({ type: "extend", text: "已展延過" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ city: user.city, site: user.site, date }, async ({ city, site, date }) => {
        const message = await checkLimit(city, site, date);
        if (!message) {
          user.exdate = date;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
  },
};

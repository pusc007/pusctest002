const { Admin, User, Site, Opentime } = require("@src/mongoose/Noise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Queue = require("@src/libs/Queue.js");
const Moment = require("moment");

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
const checkLimit = async (site, dateS, dateE, type, user) => {
  //取得檢測站點
  const siteDoc = await Site.findOne({ sitename: site });
  if (!siteDoc) return new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

  //取得開放時間
  const o = [{ dateS: { $lte: dateE }, dateE: { $gte: dateS } }];
  if (type === "redate") {
    o.push({ dateS: { $lte: user.redateBoundE }, dateE: { $gte: user.redateBoundS } });
  } else if (type === "exdate") {
    o.push({ dateS: { $lte: user.exdateBoundE }, dateE: { $gte: user.exdateBoundS } });
  }
  const opentime = await Opentime.findOne({ siteId: siteDoc._id, $and: o });
  if (!opentime) return new Error(JSON.stringify({ type: "opentimeNoExisted", text: "開放時間不存在" }));

  const redateDocs = await User.aggregate([
    {
      $match: {
        site,
        $and: [
          { redateS: { $eq: new Date(dateS) }, redateE: { $eq: new Date(dateE) } },
          { redateS: { $lte: user.redateBoundE }, redateE: { $gte: user.redateBoundS } },
        ],
      },
    },
    {
      $group: {
        _id: { dateS: "$redateS", dateE: "$redateE" },
        count: { $sum: 1 },
      },
    },
  ]);

  const exdateDocs = await User.aggregate([
    {
      $match: {
        site,
        $and: [
          { exdateS: { $eq: new Date(dateS) }, exdateE: { $eq: new Date(dateE) } },
          { exdateS: { $lte: user.exdateBoundE }, exdateE: { $gte: user.exdateBoundS } },
        ],
      },
    },
    {
      $group: {
        _id: { dateS: "$exdateS", dateE: "$exdateE" },
        count: { $sum: 1 },
      },
    },
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
    sites: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      //查詢檢測站點
      return await Site.find();
    },
    searchOneDateOpentimes: async (root, { type, site, date }, context) => {
      //檢查令牌
      const user = await checkToken(context.token);

      const siteDoc = await Site.findOne({ sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      const dateS = new Date(date);
      const dateE = new Date(date);
      dateE.setMilliseconds(dateE.getMilliseconds() + 86400000 - 1);

      const o = [
        { dateS: { $lte: dateE }, dateE: { $gte: dateS } },
        { dateS: { $gte: Moment().format("YYYY-MM-DDT23:59:59.999+00:00") } },
      ];
      if (type === "redate") {
        o.push({ dateS: { $lte: user.redateBoundE }, dateE: { $gte: user.redateBoundS } });
      } else if (type === "exdate") {
        o.push({ dateS: { $lte: user.exdateBoundE }, dateE: { $gte: user.exdateBoundS } });
      }

      const opentimes = await Opentime.find({ siteId: siteDoc._id, $and: o });

      if (!opentimes.length) return [];

      const redateDocs = await User.aggregate([
        {
          $match: {
            site,
            $and: [
              { redateS: { $lte: dateE }, redateE: { $gte: dateS } },
              { redateS: { $lte: user.redateBoundE }, redateE: { $gte: user.redateBoundS } },
            ],
          },
        },
        {
          $group: {
            _id: { dateS: "$redateS", dateE: "$redateE" },
            count: { $sum: 1 },
          },
        },
      ]);

      const exdateDocs = await User.aggregate([
        {
          $match: {
            site,
            $and: [
              { exdateS: { $lte: dateE }, exdateE: { $gte: dateS } },
              { exdateS: { $lte: user.exdateBoundE }, exdateE: { $gte: user.exdateBoundS } },
            ],
          },
        },
        {
          $group: {
            _id: { dateS: "$exdateS", dateE: "$exdateE" },
            count: { $sum: 1 },
          },
        },
      ]);
      const reduceFun = (info) => (accumulator, currentValue) => {
        if (
          currentValue._id.dateS.toString() === info.dateS.toString() &&
          currentValue._id.dateE.toString() === info.dateE.toString()
        ) {
          return accumulator + currentValue.count;
        } else {
          return accumulator;
        }
      };
      return opentimes.map((info) => {
        const redateCount = redateDocs.reduce(reduceFun(info), 0);
        const exdateCount = exdateDocs.reduce(reduceFun(info), 0);
        info.count = redateCount + exdateCount;
        return info;
      });
    },
    searchOpentimes: async (root, { type, site, dateS, dateE }, context) => {
      //檢查令牌
      const user = await checkToken(context.token);

      const siteDoc = await Site.findOne({ sitename: site });
      if (!siteDoc) throw new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

      //查詢開放時間
      const o = [
        { dateS: { $lte: dateE }, dateE: { $gte: dateS } },
        { dateS: { $gte: Moment().format("YYYY-MM-DDT23:59:59.999+00:00") } },
      ];
      if (type === "redate") {
        o.push({ dateS: { $lte: user.redateBoundE }, dateE: { $gte: user.redateBoundS } });
      } else if (type === "exdate") {
        o.push({ dateS: { $lte: user.exdateBoundE }, dateE: { $gte: user.exdateBoundS } });
      }
      const opentimes = await Opentime.find({ siteId: siteDoc._id, $and: o });

      return opentimes;
    },
  },
  Mutation: {
    login: async (root, { casenum, carnum }, context) => {
      const user = await User.findOne({ casenum: casenum, carnum: carnum });
      if (!user) throw new Error(JSON.stringify({ type: "loginError", text: "登入錯誤" }));

      //建立token
      const token = await createToken({ id: user._id, email: user.casenum + user.carnum, name: user.username });
      return { token };
    },
    reservation: async (root, { site, dateS, dateE }, context) => {
      const user = await checkToken(context.token);

      if (user.redateS || user.redateE) throw new Error(JSON.stringify({ type: "reservation", text: "已預約過" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ site, dateS, dateE }, async ({ site, dateS, dateE }) => {
        const message = await checkLimit(site, dateS, dateE, "redate", user);
        if (!message) {
          user.site = site;
          user.redateS = dateS;
          user.redateE = dateE;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    extension: async (root, { site, dateS, dateE }, context) => {
      const user = await checkToken(context.token);

      if (user.exdateS || user.exdateE) throw new Error(JSON.stringify({ type: "extension", text: "已展延過" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ site, dateS, dateE }, async ({ site, dateS, dateE }) => {
        const message = await checkLimit(site, dateS, dateE, "exdate", user);
        if (!message) {
          user.site = site;
          user.exdateS = dateS;
          user.exdateE = dateE;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    transfer: async (root, { city }, context) => {
      const user = await checkToken(context.token);

      user.city = city;
      await user.save();
    },
    editContact: async (root, { contactName, contactPhone, contactEmail }, context) => {
      const user = await checkToken(context.token);

      user.contactName = contactName;
      user.contactPhone = contactPhone;
      user.contactEmail = contactEmail;
      await user.save();
    },
  },
};

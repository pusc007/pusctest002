const { User, Site, Opentime } = require("@src/mongoose/Noise");
const Queue = require("@src/libs/Queue.js");
const Moment = require("moment");
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
  const user = await User.findOne({ _id: me.id });
  if (!user) throw new Error(JSON.stringify({ type: "accountNoExisted", text: "帳號不存在，請重新登入" }));
  return user;
});
const queue = new Queue();
const checkLimit = async (site, dateS, dateE) => {
  //取得檢測站點
  const siteDoc = await Site.findOne({ sitename: site });
  if (!siteDoc) return new Error(JSON.stringify({ type: "siteNoExisted", text: "檢測站點不存在" }));

  //取得開放時間
  const opentime = await Opentime.findOne({
    siteId: siteDoc._id,
    dateS: { $eq: new Date(dateS) },
    dateE: { $eq: new Date(dateE) },
  });
  if (!opentime) return new Error(JSON.stringify({ type: "opentimeNoExisted", text: "開放時間不存在" }));

  const redateDocs = await User.aggregate([
    {
      $match: {
        resite: site,
        redateS: { $eq: new Date(dateS) },
        redateE: { $eq: new Date(dateE) },
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
        exsite: site,
        exdateS: { $eq: new Date(dateS) },
        exdateE: { $eq: new Date(dateE) },
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
  Upload: GraphQLUpload,
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
        { dateS: { $gt: Moment().format("YYYY-MM-DDT23:59:59.999+00:00") } },
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
            resite: site,
            redateS: { $lte: dateE },
            redateE: { $gte: dateS },
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
            exsite: site,
            exdateS: { $lte: dateE },
            exdateE: { $gte: dateS },
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
        { dateS: { $gt: Moment().format("YYYY-MM-DDT23:59:59.999+00:00") } },
      ];
      if (type === "redate") {
        o.push({ dateS: { $lte: user.redateBoundE }, dateE: { $gte: user.redateBoundS } });
      } else if (type === "exdate") {
        o.push({ dateS: { $lte: user.exdateBoundE }, dateE: { $gte: user.exdateBoundS } });
      }

      return await Opentime.find({ siteId: siteDoc._id, $and: o });
    },
    verificationToken: async (root, {}, context) => {
      //檢查令牌
      await checkToken(context.token);

      return true;
    },
    postponedProveDownload: async (root, {}, context) => {
      //檢查令牌
      const user = await checkToken(context.token);
      if (user.postponedProve) {
        if (client.closed) await ftpConnect(client);
        return await downloadFTP(client, user.postponedProve);
      }
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

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("reservation")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ site, dateS, dateE }, async ({ site, dateS, dateE }) => {
        const message = await checkLimit(site, dateS, dateE);
        if (!message) {
          user.resite = site;
          user.redateS = dateS;
          user.redateE = dateE;
          user.displayPages = null;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    extension: async (root, { site, dateS, dateE }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("extension")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ site, dateS, dateE }, async ({ site, dateS, dateE }) => {
        const message = await checkLimit(site, dateS, dateE);
        if (!message) {
          user.exsite = site;
          user.exdateS = dateS;
          user.exdateE = dateE;
          user.displayPages = null;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    transfer: async (root, { city }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("transfer")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      //if (user.city) throw new Error(JSON.stringify({ type: "transfer", text: "已移轉過" }));

      user.city = city;
      user.displayPages = null;
      await user.save();
    },
    otherExtension: async (root, { postponedContent, postponedYM, postponedProve }, context) => {
      const user = await checkToken(context.token);

      const { createReadStream } = await postponedProve;
      const stream = createReadStream();
      const dirPath = `/${ftp_dirname}/prove/`;
      const filename = `${user.casenum}-${user.carnum}.jpg`;
      if (client.closed) await ftpConnect(client);
      await uploadFTP(client, stream, dirPath, filename);
      user.postponedProve = dirPath + filename;

      user.postponedContent = postponedContent;
      user.postponedYM = postponedYM;
      user.displayPages = null;
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

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

  const reDateDocs = await User.aggregate([
    {
      $match: {
        reSite: site,
        reDateS: { $eq: new Date(dateS) },
        reDateE: { $eq: new Date(dateE) },
      },
    },
    {
      $group: {
        _id: { dateS: "$reDateS", dateE: "$reDateE" },
        count: { $sum: 1 },
      },
    },
  ]);

  const exDateDocs = await User.aggregate([
    {
      $match: {
        exSite: site,
        exDateS: { $eq: new Date(dateS) },
        exDateE: { $eq: new Date(dateE) },
      },
    },
    {
      $group: {
        _id: { dateS: "$exDateS", dateE: "$exDateE" },
        count: { $sum: 1 },
      },
    },
  ]);
  let count = 0;
  if (reDateDocs.length) {
    count += reDateDocs[0].count;
  }
  if (exDateDocs.length) {
    count += exDateDocs[0].count;
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
      if (type === "reDate") {
        o.push({ dateS: { $lte: user.reDateBoundE }, dateE: { $gte: user.reDateBoundS } });
      } else if (type === "exDate") {
        o.push({ dateS: { $lte: user.exDateBoundE }, dateE: { $gte: user.exDateBoundS } });
      }

      const opentimes = await Opentime.find({ siteId: siteDoc._id, $and: o });

      if (!opentimes.length) return [];

      const reDateDocs = await User.aggregate([
        {
          $match: {
            reSite: site,
            reDateS: { $lte: dateE },
            reDateE: { $gte: dateS },
          },
        },
        {
          $group: {
            _id: { dateS: "$reDateS", dateE: "$reDateE" },
            count: { $sum: 1 },
          },
        },
      ]);

      const exDateDocs = await User.aggregate([
        {
          $match: {
            exSite: site,
            exDateS: { $lte: dateE },
            exDateE: { $gte: dateS },
          },
        },
        {
          $group: {
            _id: { dateS: "$exDateS", dateE: "$exDateE" },
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
        const reDateCount = reDateDocs.reduce(reduceFun(info), 0);
        const exDateCount = exDateDocs.reduce(reduceFun(info), 0);
        info.count = reDateCount + exDateCount;
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
      if (type === "reDate") {
        o.push({ dateS: { $lte: user.reDateBoundE }, dateE: { $gte: user.reDateBoundS } });
      } else if (type === "exDate") {
        o.push({ dateS: { $lte: user.exDateBoundE }, dateE: { $gte: user.exDateBoundS } });
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
    reservation: async (root, { reSite, reDateS, reDateE }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("reservation")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add({ reSite, reDateS, reDateE }, async ({ reSite, reDateS, reDateE }) => {
        const message = await checkLimit(reSite, reDateS, reDateE);
        if (!message) {
          user.reSite = reSite;
          user.reDateS = reDateS;
          user.reDateE = reDateE;
          user.displayPages = null;
          await user.save();
        }
        return message;
      });
      queue.next();
      if (message) throw message;
    },
    extension: async (root, { exSite, exDateS, exDateE, exReason }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("extension")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      if (queue.busy) throw new Error(JSON.stringify({ type: "busy", text: "忙線中請稍後在執行" }));

      const message = await queue.add(
        { exSite, exDateS, exDateE, exReason },
        async ({ exSite, exDateS, exDateE, exReason }) => {
          const message = await checkLimit(exSite, exDateS, exDateE);
          if (!message) {
            user.exSite = exSite;
            user.exDateS = exDateS;
            user.exDateE = exDateE;
            user.exReason = exReason;
            user.displayPages = null;
            user.exRequestStatus = "審核中";
            await user.save();
          }
          return message;
        }
      );
      queue.next();
      if (message) throw message;
    },
    transfer: async (root, { city, cityReason }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("transfer")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      //if (user.city) throw new Error(JSON.stringify({ type: "transfer", text: "已移轉過" }));

      user.city = city;
      user.cityReason = cityReason;
      user.displayPages = null;
      user.cityRequestStatus = "審核中";
      await user.save();
    },
    otherExtension: async (root, { postponedReason, postponedYM, postponedProve }, context) => {
      const user = await checkToken(context.token);

      if (!user.displayPages) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));
      const ary = user.displayPages.split(",");
      if (!ary.includes("otherExtension")) throw new Error(JSON.stringify({ type: "noAuthority", text: "無權限" }));

      const { createReadStream } = await postponedProve;
      const stream = createReadStream();
      const dirPath = `/${ftp_dirname}/prove/`;
      const filename = `${user.casenum}-${user.carnum}.jpg`;
      if (client.closed) await ftpConnect(client);
      await uploadFTP(client, stream, dirPath, filename);
      user.postponedProve = dirPath + filename;

      user.postponedReason = postponedReason;
      user.postponedYM = postponedYM;
      user.displayPages = null;
      user.postponedRequestStatus = "審核中";
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

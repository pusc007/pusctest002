const stream = require("stream");
const process = require("process");

const ftpConnectFun = (ftp_host, ftp_port, ftp_user, ftp_pass) => async (client) => {
  try {
    await client.access({
      host: ftp_host,
      port: ftp_port,
      user: ftp_user,
      password: ftp_pass,
    });
  } catch (e) {
    throw new Error(JSON.stringify({ type: "error", text: "錯誤" }));
  }
};

const uploadFTP = async (client, stream, dirPath, filename) => {
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
    await client.ensureDir(dirPath);
    await client.uploadFrom(stream, filename);
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

module.exports = { ftpConnectFun, uploadFTP, deleteFTP, downloadFTP };

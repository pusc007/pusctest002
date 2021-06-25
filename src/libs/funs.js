const jwt = require("jsonwebtoken");
const SECRET = "93643860-b464-11eb-8529-0242ac130003";
const createToken = ({ id, email, name }) =>
  jwt.sign({ id, email, name }, SECRET, {
    expiresIn: "1d",
  });
const checkTokenFun = (fun) => async (token) => {
  if (token) {
    let me;
    try {
      me = await jwt.verify(token, SECRET);
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
    return await fun(me);
  } else {
    throw new Error(JSON.stringify({ type: "tokenNoExisted", text: "無認證，請重新登入" }));
  }
};
module.exports = { createToken, checkTokenFun };

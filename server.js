require("module-alias/register"); //註冊路徑別名
const { ApolloServer } = require("apollo-server-express");
const Express = require("express");
const Mongoose = require("mongoose");
const Path = require("path");
const noise_typeDefs = require("@src/graphql/noise/typeDefs");
const noise_resolvers = require("@src/graphql/noise/resolvers");
const noiseBackEnd_typeDefs = require("@src/graphql/noiseBackEnd/typeDefs");
const noiseBackEnd_resolvers = require("@src/graphql/noiseBackEnd/resolvers");
const depthLimit = require("graphql-depth-limit");
const startServer = async () => {
  const app = Express();

  const virtualDirPath = process.env.virtualDirPath || "";
  const noiseUrl = virtualDirPath + "/noise";
  const noiseBackEndUrl = virtualDirPath + "/noiseBackEnd";
  try {
    const mongodbUrl = process.env.MongodbUrl || "mongodb://cai007:abc123456@localhost:27017/Noise";

    await Mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //auth: { authSource: "admin" },
      //user: "cai007",
      //pass: "abc123456",
    });

    app.use(noiseUrl, Express.static(__dirname + "/public/noise")); //使用靜態資料夾
    app.use(noiseBackEndUrl, Express.static(__dirname + "/public/noiseBackEnd")); //使用靜態資料夾

    const noiseServer = new ApolloServer({
      typeDefs: noise_typeDefs,
      resolvers: noise_resolvers,
      introspection: false,
      playground: false,
      context: ({ req }) => ({ token: req.headers["x-token"] }),
      validationRules: [depthLimit(5)],
    });
    noiseServer.applyMiddleware({ app, path: noiseUrl + "/api" });

    const noiseBackEndServer = new ApolloServer({
      typeDefs: noiseBackEnd_typeDefs,
      resolvers: noiseBackEnd_resolvers,
      introspection: false,
      playground: false,
      context: ({ req }) => ({ token: req.headers["x-token"] }),
      validationRules: [depthLimit(5)],
    });
    noiseBackEndServer.applyMiddleware({ app, path: noiseBackEndUrl + "/api" });
  } catch (e) {
    app.get(noiseUrl, (req, res) => {
      res.send("資料庫連接失敗");
    });
    app.get(noiseBackEndUrl, (req, res) => {
      res.send("資料庫連接失敗");
    });
  }

  const port = process.env.PORT || 4000;
  const host = process.env.BASE_URL || "localhost";
  const baseUrl = `http://${host}:${port}`;
  app.listen(port, () => {
    console.log(`前台：${baseUrl}/noise`);
    console.log(`後台：${baseUrl}/noiseBackEnd`);
    //console.log(`前台用：${baseUrl}${noiseServer.graphqlPath}`);
    //console.log(`後台用：${baseUrl}${noiseBackEndServer.graphqlPath}`);
  });
};
startServer();

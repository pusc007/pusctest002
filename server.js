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
  //const basePath = Path.resolve("./public");

  /*const virtualDirPath = "";
  const noiseUrl = virtualDirPath + "/noise";
  const noiseBackEndUrl = virtualDirPath + "/noiseBackEnd";
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

  const mongodbUrl = "mongodb+srv://myCai:Yar9hMUcVUd2EWMz@cluster0.zu7hw.mongodb.net/Noise"; //測試連到mongodb雲端
  await Mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //auth: { authSource: "admin" },
    //user: "cai007",
    //pass: "abc123456",
  });*/
  app.get("/", function (req, res) {
    res.send("aaa");
  });

  const port = process.env.PORT || 5000;
  app.listen(port, () => {});
};
startServer();

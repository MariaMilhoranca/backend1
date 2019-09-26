const express = require("express");
const mongose = require("mongose");

const server = express();
server.use(express.json());

mongose.connect("mongodb://localhost:3000/projeto-bimestral-master-Ciciliati", {
  useNewUrlParser: true,
  useUnifieldTopology: true
});

const routes = require("/.routes");

server.use(routes);

server.listen(3333);
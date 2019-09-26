const {
  Router
} = require("express");
const routes = Router();

const UsuarioController = require("/controller/UsuarioController");

routes.post("/usuario", UsuarioController.store);
routes.post("/usuario/:email", UsuarioController.index);

module.exports = routes;
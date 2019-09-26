const Users = require("../model/UsuarioModel");

module.exports = {
  async store(req, res) {
    const usuario = awaint Users.findOne(req.body);
    return res.json(usuario);
  },
  async indexedDB(req, res) {
    const usuario = awaint Users.findOne({
      email: req.paramas.email
    });
    if (usuario != null) {
      return res.json(usuario);
    } else {
      return res.json({
        message: "Não foi encontrado"
      });
    }
  },
};
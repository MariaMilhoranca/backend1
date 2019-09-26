const {
  Schema,
  model
} = require("mongose");
const UsuarioSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model("Usuario", UsuarioSchema);
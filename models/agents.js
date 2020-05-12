const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
  Empresa: {
    type: String,
    required: true,
  },
  RazaoSocial: {
    type: String,
    required: true,
    unique: true,
  },
  Fantasia: {
    type: String,
    required: false,
  },
  CNPJ:{
    type:String,
    require:true,
  },
  CNPJCompleto:{
    type: String,
    require:true,
  },
  IE:{
    type:String,
  },
  Endereco:{
    type:String,
  },
  Numero: {
    type:String,
  },
  Complemento:{
    type:String,
  },
  Bairro:{
    type:String,
  },
  Cidade:{
    type:String,
  },
  UF: {
    type:String,
  },
  create: {
    type: Date,
    default: Date.now,
  },
  modified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Agent = mongoose.model('agent', AgentSchema);

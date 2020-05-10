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

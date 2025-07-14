const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
const Product = require("../models/productModel");
const redisClient = require("../config/redisClient");

exports.getAllProducts = async (req, res) => {
  try {
    const cache = await redisClient.get("products");

    if (cache) {
      return res.json(JSON.parse(cache));
    }

    const products = await Product.find();
    await redisClient.set("products", JSON.stringify(products), { EX: 60 });

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    await redisClient.del("products");
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    await redisClient.del("products");
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    await redisClient.del("products");
    res.json({ message: "Produto excluído" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

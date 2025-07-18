const express = require("express");
const router = express.Router();
const amqp = require("amqplib");

router.post("/", async (req, res) => {
  const pedido = req.body;

  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("filaPedidos");
  channel.sendToQueue("filaPedidos", Buffer.from(JSON.stringify(pedido)));

  res.status(201).send({ message: "Pedido enviado para processamento", pedido });
});

module.exports = router;
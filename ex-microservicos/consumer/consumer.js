const amqp = require("amqplib");

async function start() {
  const conn = await amqp.connect("amqp://localhost");
  const channel = await conn.createChannel();
  await channel.assertQueue("filaPedidos");

  console.log("Worker aguardando pedidos...");

  channel.consume("filaPedidos", (msg) => {
    const pedido = JSON.parse(msg.content.toString());
    console.log("Pedido processado:", pedido);
    channel.ack(msg);
  });
}

start();

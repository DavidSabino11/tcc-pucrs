const redis = require("redis");
require("dotenv").config();

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

client.on("error", (err) => console.log("Erro Redis:", err));
client.connect().then(() => console.log("Redis conectado"));

module.exports = client;
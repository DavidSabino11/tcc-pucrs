const express = require("express");
const routes = require("./routes/pedidoRoutes");
const app = express();

app.use(express.json());
app.use("/pedidos", routes);

app.listen(3000, () => {
  console.log("API de Pedidos rodando em http://localhost:3000");
});

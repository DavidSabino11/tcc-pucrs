const express = require("express");
const app = express();
const conversorRoutes = require("./conversor-moedas/routes/conversorRoutes");

app.use("/api", conversorRoutes);

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));

require("./soap/clientSoap");
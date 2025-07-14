const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db");
require("./config/redisClient");

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

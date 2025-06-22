const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Bem-vindo à arquitetura server-side!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

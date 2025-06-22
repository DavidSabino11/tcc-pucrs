const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.listarUsuarios);
router.post("/", userController.criarUsuario);
router.get("/:id", userController.buscarUsuarioPorId);
router.put("/:id", userController.atualizarUsuario);
router.delete("/:id", userController.removerUsuario);

module.exports = router;

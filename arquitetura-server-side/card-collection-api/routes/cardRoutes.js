const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/", cardController.listarCards);
router.get("/:id", cardController.buscarCardPorId);
router.post("/", cardController.criarCard);
router.put("/:id", cardController.atualizarCard);
router.delete("/:id", cardController.removerCard);

module.exports = router;
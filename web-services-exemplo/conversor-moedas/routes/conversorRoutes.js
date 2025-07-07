const express = require("express");
const router = express.Router();
const conversorController = require("../controllers/conversorController");

router.get("/convert", conversorController.converterMoeda);

module.exports = router;

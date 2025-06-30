let idAtual = 1;
const Card = require("../models/cardModel");

exports.listarCards = (req, res) => {
  res.json(cards);
};

exports.buscarCardPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);
  if (!card) return res.status(404).json({ erro: "Cartão não encontrado." });
  res.json(card);
};

exports.criarCard = (req, res) => {
  const { titulo, descricao } = req.body;
  const novoCard = new Card(idAtual++, titulo, descricao);
  cards.push(novoCard);
  res.status(201).json(novoCard);
};

exports.atualizarCard = (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);
  if (!card) return res.status(404).json({ erro: "Cartão não encontrado." });

  const { titulo, descricao } = req.body;
  if (titulo) card.titulo = titulo;
  if (descricao) card.descricao = descricao;

  res.json(card);
};

exports.removerCard = (req, res) => {
  const id = parseInt(req.params.id);
  cards = cards.filter(c => c.id !== id);
  res.json({ mensagem: "Cartão removido com sucesso." });
};
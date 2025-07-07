exports.converterMoeda = (req, res) => {
  const { from, to, amount } = req.query;

  const taxas = {
    "USD-BRL": 5.48,
    "BRL-USD": 0.19
  };

  const key = `${from}-${to}`;
  const taxa = taxas[key];

  if (!taxa) {
    return res.status(400).json({ erro: "Converão falhada" });
  }

  const convertido = (amount * taxa).toFixed(2);

  res.json({
    from,
    to,
    amount: Number(amount),
    converted: Number(convertido)
  });
};

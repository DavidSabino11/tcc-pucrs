const { codigoValido, nomeValido, precoComTaxa } = require("./produto");

test("Fluxo completo do produto válido", () => {
  const codigo = 500;
  const nome = "Caderno";
  const preco = 50;

  expect(codigoValido(codigo)).toBe(true);
  expect(nomeValido(nome)).toBe(true);
  expect(precoComTaxa(preco)).toBe(52.5);
});
const { codigoValido, nomeValido, precoComTaxa } = require("./produto");

test("Código 100 deve ser válido", () => {
  expect(codigoValido(100)).toBe(true);
});

test("Código 99 não deve ser válido", () => {
  expect(codigoValido(99)).toBe(false);
});

test("Nome não pode ser vazio", () => {
  expect(nomeValido("Caneta")).toBe(true);
  expect(nomeValido(" ")).toBe(false);
});

test("Preço com taxa de 5%", () => {
  expect(precoComTaxa(100)).toBe(105);
});

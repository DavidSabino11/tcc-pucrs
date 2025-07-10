function codigoValido(codigo) {
  return codigo >= 100 && codigo <= 999;
}

function nomeValido(nome) {
  return nome.trim().length > 0;
}

function precoComTaxa(preco) {
  return +(preco * 1.05).toFixed(2);
}

module.exports = { codigoValido, nomeValido, precoComTaxa };

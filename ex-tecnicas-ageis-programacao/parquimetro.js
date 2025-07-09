class Parquimetro {
  constructor() {
    this.saldo = 0;
    this.moedasValidas = [1, 5, 10, 25, 50, 100];
    this.valorTicket = 200;
  }

  inserirMoeda(valor) {
    if (!this.moedasValidas.includes(valor)) {
      throw new Error("Moeda inválida");
    }
    this.saldo += valor;
  }

  emitirTicket() {
    if (this.saldo >= this.valorTicket) {
      this.saldo -= this.valorTicket;
      return "Ticket emitido";
    } else {
      return "Saldo insuficiente";
    }
  }

  devolverSaldo() {
    const saldoDevolvido = this.saldo;
    this.saldo = 0;
    return saldoDevolvido;
  }

  verificarSaldo() {
    return this.saldo;
  }
}

module.exports = Parquimetro;

const Parquimetro = require("./parquimetro");

describe("Parquimetro", () => {
  let pq;

  beforeEach(() => {
    pq = new Parquimetro();
  });

  test("iniciar com saldo zero", () => {
    expect(pq.verificarSaldo()).toBe(0);
  });

  test("adicionar moeda válida ao saldo", () => {
    pq.inserirMoeda(100);
    expect(pq.verificarSaldo()).toBe(100);
  });

  test("lançar erro ao inserir moeda inválida", () => {
    expect(() => pq.inserirMoeda(3)).toThrow("Moeda inválida");
  });

  test("emitir ticket quando saldo suficiente", () => {
    pq.inserirMoeda(100);
    pq.inserirMoeda(100);
    expect(pq.emitirTicket()).toBe("Ticket emitido");
    expect(pq.verificarSaldo()).toBe(0);
  });

  test("não é permitido emitir ticket quando saldo insuficiente", () => {
    pq.inserirMoeda(100);
    expect(pq.emitirTicket()).toBe("Saldo insuficiente");
  });

  test("devolver saldo corretamente", () => {
    pq.inserirMoeda(50);
    expect(pq.devolverSaldo()).toBe(50);
    expect(pq.verificarSaldo()).toBe(0);
  });
});

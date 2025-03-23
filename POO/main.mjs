import { CarroComPlaca } from "./CarroComPlaca.mjs";
import { Locadora } from "./Locadora.mjs";

const NOME_LOCADORA = "Locadora DS";
const LIMITE_TANQUE_BAIXO = 10;
let locadora = new Locadora();

const separador = () => console.log("=".repeat(30));

console.log(`Bem-vindo à ${NOME_LOCADORA}`);
separador();

locadora.adicionaCarro(new CarroComPlaca("ABC-9I23"));
locadora.adicionaCarro(new CarroComPlaca("DEF-0U74"));
locadora.adicionaCarroPadrao();
separador();

locadora.consultaCarros();
separador();

locadora.abasteceCarro(0, 10);
locadora.abasteceCarro(1, 5);
separador();

locadora.consultaCarros();
separador();

const totalBaixos = locadora.verificaTanqueBaixo(LIMITE_TANQUE_BAIXO);
console.log(`Total de carros com tanque baixo: ${totalBaixos}`);
separador();

locadora.abasteceCarro(1, 50);
separador();

locadora.consultaCarros();
separador();
import { Carro } from "./carro.mjs";

export class CarroComPlaca extends Carro {
    #_placa;
    constructor(umaPlaca) {
        super(55);
        this.#_placa = umaPlaca;
    }

    get placa() {
        return this.#_placa;
    }

    exibirStatus() {
        return `Carro ${this.#_placa}: Tanque ${this.tanque}L`;
    }
}
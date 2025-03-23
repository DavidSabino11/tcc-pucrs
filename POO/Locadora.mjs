import { CarroComPlaca } from "./CarroComPlaca.mjs";

export class Locadora {
    #_carros;
    constructor() {
        this.#_carros = [];
    }

    adicionaCarro(umCarro) {
        this.#_carros.push(umCarro);
        console.log(`Carro ${umCarro.placa} adicionado! Total: ${this.#_carros.length}`);
    }

    adicionaCarroPadrao() {
        const placaPadrao = `XYZ-${Math.floor(Math.random() * 1000)}`;
        const carroPadrao = new CarroComPlaca(placaPadrao);
        this.#_carros.push(carroPadrao);
        console.log(`Carro padrão ${placaPadrao} adicionado! Total: ${this.#_carros.length}`);
    }

    consultaCarros() {
        console.log(`Carros na locadora (Total: ${this.#_carros.length}):`);
        this.#_carros.forEach((carro, i) => {
            console.log(`${i + 1}. ${carro.exibirStatus()}`);
        });
    }

    abasteceCarro(index, quantidade) {
        if (index >= 0 && index < this.#_carros.length) {
            this.#_carros[index].tanque = quantidade;
            console.log(`Carro ${this.#_carros[index].placa} abastecido com ${quantidade}L`);
        } else {
            console.log("Índice inválido!");
        }
    }

    verificaTanqueBaixo(limite) {
        let carrosBaixos = 0;
        this.#_carros.forEach((carro) => {
            if (carro.tanque < limite) {
                console.log(`Atenção: ${carro.placa} tem tanque abaixo de ${limite}L`);
                carrosBaixos++;
            }
        });
        return carrosBaixos;
    }
}
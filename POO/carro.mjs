export class Carro {
    #_tanque;
    constructor(capacidadeTanque) {
        this.#_tanque = capacidadeTanque;
    }

    get tanque() {
        return this.#_tanque;
    }

    set tanque(quantidade) {
        this.#_tanque = quantidade;
    }
}
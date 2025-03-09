class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionar(valor) {
        let novoNo = new No(valor);

        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    remover(valor) {
        if (this.cabeca === null) {
            console.log("Lista vazia, nada para remover!");
            return;
        }

        if (this.cabeca.valor === valor) {
            this.cabeca = this.cabeca.proximo;
            return;
        }

        let atual = this.cabeca;
        while (atual.proximo !== null) {
            if (atual.proximo.valor === valor) {
                atual.proximo = atual.proximo.proximo;
                return;
            }
            atual = atual.proximo;
        }
        console.log("Valor não encontrado na lista!");
    }

    exibir() {
        if (this.cabeca === null) {
            console.log("Lista vazia!");
            return;
        }

        let atual = this.cabeca;
        let resultado = "Lista: ";
        while (atual !== null) {
            resultado += atual.valor + " -> ";
            atual = atual.proximo;
        }
        resultado += "null";
        console.log(resultado);
    }
}

let minhaLista = new ListaEncadeada();

minhaLista.adicionar(40);
minhaLista.adicionar(5);
minhaLista.adicionar(9);
minhaLista.adicionar(8);
minhaLista.adicionar(23);
minhaLista.exibir();

minhaLista.remover(8);
minhaLista.exibir();

minhaLista.adicionar(40);
minhaLista.exibir();
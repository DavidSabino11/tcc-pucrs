class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class Arvore {
    constructor() {
        this.raiz = null;
    }

    adicionar(valor) {
        let novoNo = new No(valor);

        if (this.raiz === null) {
            this.raiz = novoNo;
        } else {
            this.inserirNo(this.raiz, novoNo);
        }
    }

    inserirNo(noAtual, novoNo) {
        if (novoNo.valor < noAtual.valor) {
            if (noAtual.esquerda === null) {
                noAtual.esquerda = novoNo;
            } else {
                this.inserirNo(noAtual.esquerda, novoNo);
            }
        }
        else {
            if (noAtual.direita === null) {
                noAtual.direita = novoNo;
            } else {
                this.inserirNo(noAtual.direita, novoNo);
            }
        }
    }

    exibir() {
        if (this.raiz === null) {
            console.log("Árvore vazia!");
            return;
        }
        this.exibirEmOrdem(this.raiz);
    }

    exibirEmOrdem(no) {
        if (no !== null) {
            this.exibirEmOrdem(no.esquerda);
            console.log(no.valor);              
            this.exibirEmOrdem(no.direita);
        }
    }
}

let minhaArvore = new Arvore();
minhaArvore.adicionar(30);
minhaArvore.adicionar(10);
minhaArvore.adicionar(40);
minhaArvore.adicionar(20);
minhaArvore.exibir();
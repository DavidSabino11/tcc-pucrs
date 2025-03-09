const readline = require('readline');

const entradaUsuario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaUsuario.question('Digite um numero: ', (resposta) => {
    let numero = parseInt(resposta);
    
    if (isNaN(numero) || numero < 0) {
        console.log("Digite um numero valido!");
    } else {
        
        if (numero % 2 == 0) {
            console.log(numero + " é PAR");
        } else {
            console.log(numero + " é IMPAR");
        }
        
        let ehPrimo = true;
        if (numero <= 1) {
            ehPrimo = false;
        } else {
            for (let i = 2; i < numero; i++) {
                if (numero % i == 0) {
                    ehPrimo = false;
                }
            }
        }
        
        if (ehPrimo) {
            console.log(numero + " é PRIMO");
        } else {
            console.log(numero + " NÃO é primo");
        }
    }
    
    entradaUsuario.close();
});
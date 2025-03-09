let meuSet = new Set();

let numeros = [0, 1, 1, 2, 3, 2];

for (let numero of numeros) {
    meuSet.add(numero);
    console.log("Adicionando:", numero);
    console.log("Set atual:", meuSet);
    console.log("-------");
}
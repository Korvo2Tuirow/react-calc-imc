let carros = ["BMW", "FERRARI", "Mercedes"];
let x = [1];

console.log(`1. ${carros[x]}`);

carros[1]=("Audi");

console.log(`1. ${carros[x]}`);

carros.push("Volvo");
console.log(carros);

console.log(`quantidade de itens =  ${carros.length}`);

//variável.pop() retira o ultimo item do array


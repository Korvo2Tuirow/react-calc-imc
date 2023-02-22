//OPERADOR SPREAD////////////////////////////

let numeros = [1, 2, 3, 4];

let maisNumeros = [...numeros, 5, 6, 7, 8];

console.log(maisNumeros);



//OPERADOR REST//////////////////////////////

function adicionar(...num){

    console.log(num);

}

adicionar(5, 6, 7, 8);

/////////

function addNames(nomes, ...outrosNomes){

let allNames = [
    ...nomes,
    ...outrosNomes
];

return allNames;

}

let nomes = ["Korvo", "Robert"];

let outros = addNames(nomes, "Passarinho", "Ave");

console.log(outros);

let nome = "Robert Lopes Ramos";

let letras = nome.length; // mostra a quantidade de letras

let busca = nome.indexOf('Lopes'); // procura se tem a palavra ou letra (até um espaço " ") e mostra a posição da string inicial dela. Se não encontrar mostrará -1


console.log(busca);

///////////////////////////////////////////////////

let resultado = " "
if(nome.indexOf("Lopes") > -1){
    resultado = "Contém";
}else{
    resultado = "Não contém";
};

console.log(resultado);

//////////////////////////////////////////////////////

let slice = nome.slice(0, 10);// busca até a 10 letra começando do 0
// podemos colocar (-5) que começará a contar 5 letras de trás para frente

console.log(slice);

////////////////////////////////////////////////////

let substring = nome.substring(10); // começa da decima letra até o final.

console.log(substring);

//////////////////////////////////////////////////////

let subs = nome.substr(0, 7);// O 0 é a posição inicial e o 7 é a quantidade de caracteres que vai pegar

console.log(subs);

///////////////////////////////////////////////////////

let replace = nome.replace('Lopes', 'Reis');// procura o primeiro parâmetro e substitui pelo segundo, mas não substitui na variável na variável nome

console.log(replace);

let gostos = "Eu gosto de motos";

let trocaGostos = gostos.replace('motos', 'carros');

console.log(trocaGostos);
console.log(gostos); // o replace não substitui na variável

/////////////////////////////////////////////////////////

let toUpperCase = nome.toLocaleUpperCase(); // deixa tudo maiúsculo

console.log(toUpperCase);

let toLowerCase = nome.toLowerCase();// deixa tudo minusculo

console.log(toLowerCase);

//////////////////////////////////////////////////////////

let split = nome.split(' ');// coloca o que esta antes e depois dos espaços em arrays (corta onde há espaços (' '))... Posso usar virgula caso aja uma ('Bolo, Ovo, etc, ...')

console.log(split);
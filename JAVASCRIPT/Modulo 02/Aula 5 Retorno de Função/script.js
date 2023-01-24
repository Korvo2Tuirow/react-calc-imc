//!= diferente

// && = e

// || = ou

// function somar(n1, n2) {
//     let resultado = n1 + n2
//     console.log(`resultado: ${resultado}`)

// }
// somar(10, 15);

// function nomeCompleto(nome, sobremome) {

//     console.log(`${nome} ${sobremome}`)

// }
// nomeCompleto("Robert", "Lopes");

// Entrada -> Processamento -> Saida

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Korvo", "Tuirow"));


/*-----------------------------------------*/

// function maiorDeIdade(idade) {
//     if(idade > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let verificação = maiorDeIdade(15);

// console.log(verificação)

// function maiorDeIdade(idade) {
//     if(idade > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let idade = 12

// let verificacao = maiorDeIdade(idade)

// if(verificacao){
//     console.log("Maior de idade");
// }
// else{
//     console.log("Menor de idade")
// }

function maiorDeIdade(idade) {
    if (idade >= 18) {
      return console.log('Você é maior de idade.');
    } else {
      return console.log('Você é menor de idade.');
    }
  }
  
  let verificacao = maiorDeIdade(prompt('Qual sua idade?'));
  console.log(verificacao);
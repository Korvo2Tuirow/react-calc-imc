let pessoa = {
  nome: "Korvo",
  sobrenome: "Tuirow",
  idade: 38,
  social: {
    facebook: "Korvo Tuirow",
    instagram: {
      url: "@korvotuirow",
      seguidores: 1000,
    }
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(pessoa.nomeCompleto());

/*
let idade = pessoa.idade;
let nome = pessoa.nome;
*/

let { nome: pessoaNome, sobrenome, idade: novaIdade } = pessoa;

//////////////////////////////////////////////////////////////

let { facebook, instagram } = pessoa.social;

//ou

let {
  social: { instagram:{url: insta} },
} = pessoa;


console.log(insta);

//////////////////////////////////////////////////////////////

let objeto = ["Copo", "Prato", "Faca"];

let[obj1, , obj3] = objeto;

console.log(obj1, obj3);

////////////////////////

function criar(){
  return [1, 2 , 3];
}

let [a, b ,c] = criar();

console.log(a, b, c);




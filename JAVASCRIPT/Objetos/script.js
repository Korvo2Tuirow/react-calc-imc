class Pessoa{
    constructor(nome, idade, altura, imc){

        this._nome = nome;
        this._idade = idade;
        this._altura = altura;
        this._imc = imc;
    }

    

}

let pessoa1 = new Pessoa("Robert", 38, 1.84);
let pessoa2 = new Pessoa("Maria", 22, 1.50);

console.log(pessoa1);
console.log(pessoa2);
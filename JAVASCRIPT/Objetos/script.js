class Pessoa {
  constructor(nome, idade, altura, peso, imc) {
    this._nome = nome;
    this._idade = idade;
    this._altura = altura;
    this._peso = peso;
    this._imc = this._peso / (this._altura * this._altura);
  }

  calcularImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(2);
  }

  //get = pegar informação
  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    return (this._nome = novoNome);
  }
}

let pessoa1 = new Pessoa("Robert", 38, 1.84, 84);
let pessoa2 = new Pessoa("Maria", 22, 1.5, 55.3);

pessoa1.nome = "Korvo";
console.log(pessoa1._nome);

console.log(pessoa1.calcularImc());
console.log(pessoa2._idade);
console.log(pessoa1);
class Pessoa {
    
    steps = 0;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    takeAStep(){ //função
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){ //exeucta a função de for number
            this.idade = newAge;} else{
            console.log("Idade não é um numero");
        }}
}
////////////////////////////////////////////////////////////

let id1 = new Pessoa("Robert", 38);
let id2 = new Pessoa("Lucas", 40);
let id3 = new Pessoa("Korvo", 18);

////////////////////////////////////////////////////////////

id1.idade = 38;
id3.idade = 35;

////////////////////////////////////////////////////////////

console.log(id1.nome);
console.log(id1.idade);
console.log(id1);
console.log(`${id2.nome} tem ${id2.idade} anos`);
console.log(id3.idade);

///////////////////////////////////////////////////////////

id1.takeAStep(); // executando a função para id1

////////////////////////////////////////////////////////////

console.log(`Passos de ${id1.nome}: ${id1.steps}`);
console.log(`Passos de ${id2.nome}: ${id2.steps}`);

///////////////////////////////////////////////////////////

id2.setAge('abc');

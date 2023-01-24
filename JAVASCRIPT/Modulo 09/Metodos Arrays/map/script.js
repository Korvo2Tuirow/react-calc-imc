let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let lista3 = [];
let lista4 = [];
let lista5 = [];
let lista6 = [];

//lista2 = lista.map(item => item*2);

lista2 = lista.map(function(item){
    return item * 2;
});

console.log(lista2  );

lista3 = lista.filter(function(item){
    if(item < 20){
        return true;
    }else{
        return false;
    }
});

console.log(lista3);

lista4 = lista.every(item => item >30); // se todos são?
console.log(lista4);// retorna boulean

lista5 = lista.some(item => item < 20); // se algum indice é menor que vinte
console.log(lista5);

lista6 = lista.find((item) => item==16);
console.log(lista6);

let nomes = [
    {nome:'Paulo', sobrenome:'Silva', idade:32 },
    {nome:'Maria', sobrenome:'Souza', idade:30},
    {nome:'José', sobrenome:'Lessa', idade:25}
];

let pessoa = nomes.find(function(res){
    return (res.nome == 'Paulo')? true : false;
})

console.log(pessoa);

let pessoa2 = nomes.find((res) => res.idade == 30);
console.log(pessoa2);


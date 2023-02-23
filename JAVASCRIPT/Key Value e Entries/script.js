let lista = ['ovo', 'farinha', 'leite', 'sal'];

console.log(Object.keys(lista)); //(4) ['0', '1', '2', '3']

console.log(Object.entries(lista));/*
Array(4)
0: (2) ['0', 'ovo']
1: (2) ['1', 'farinha']
2: (2) ['2', 'leite']
3: (2) ['3', 'sal']

0:Array(2)
    0:"0"
    1:"ovo"

1:Array(2)
    0:"1"
    1:"farinha"

2:Array(2)
    0:"2"
    1:"leite"

3:Array(2)
    0:"3"
    1:"sal"

*/

let pessoa ={
    nome: 'Korvo',
    idade: '38',
    vulgo: 'Robert'
}

console.log(Object.values(pessoa));
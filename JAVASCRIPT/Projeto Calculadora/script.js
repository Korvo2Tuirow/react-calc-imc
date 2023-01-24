let teclasNum = [...document.querySelectorAll('.num')];
let teclasOp = [...document.querySelectorAll('.tOpe')];
let display = document.querySelector('.display');


console.log(teclasNum[5]);



teclasNum[5].addEventListener('click', num6);

function num6(){
    display.append ('6');
    let valor = display
console.log(valor)
}

teclasNum[6].addEventListener('click', num7);

function num7(){
    display.append ('1');
}


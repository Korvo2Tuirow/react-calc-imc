let btn = document.querySelector('#btn');

btn.addEventListener('click', apertou);

function apertou(){
   console.log ("ola");
}


let input = document.querySelector('#input');

input.addEventListener('keypress', soltou);

let. paragrafo = document.createElement('p');


 function soltou(event){

     if(event.key === "Enter"){
        let campo = document.querySelector('body');
        let paragrafo = document.createElement('p');
        let text = input.value;

        campo.append(paragrafo);
        paragrafo.innerText = text;

        input.value = '';

      


     }
 }
function showTime(){

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let txt = `Agora são ${h}:${m}:${s}:${ms}`;

    horas.innerHTML = txt;
}

let timer;
let horas = document.querySelector('span');
let play = document.querySelector('#play').addEventListener('click', começar);
let stop = document.querySelector('#stop').addEventListener('click', parar);

function começar(){

    timer = setInterval(showTime, 1);

};

function parar(){
    clearInterval(timer);
}

////////////////////////////////////////////////////////

let paraAlert;

function alerta(){
  paraAlert =  setTimeout(function(){
        alert("OLA, Tudo bem?");
    },3000)
};

function stopAlert(){
    clearTimeout( paraAlert);
}


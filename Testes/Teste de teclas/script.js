let div = document.querySelector(".div");
window.addEventListener('keydown', tecla);

let vertical = 0;
let horizontal = 0;
let velocidade = 15;

function tecla(e){
  
    if(e.key === "ArrowUp"){
        div.style.top = --vertical *velocidade +"px";
        div.style.backgroundColor = "#00f";
       
    }
    if(e.key === "ArrowDown"){
        div.style.top = ++vertical *velocidade +"px";
        div.style.backgroundColor = "#0f0";

    }
    if(e.key === "ArrowLeft"){
        div.style.left = --horizontal *velocidade +"px";
        div.style.backgroundColor = "#f00";
        
    }
    if(e.key === "ArrowRight"){
        div.style.left = ++horizontal *velocidade +"px";
        div.style.backgroundColor = "#000";
       
    }
}





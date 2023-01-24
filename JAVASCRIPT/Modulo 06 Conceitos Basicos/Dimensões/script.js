document.querySelector('.texto').clientWidth;

document.querySelector('.texto').offsetHeight; // no navegador

document.querySelector('.texto').scrollHeight;


function subir(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function btnOn(){
    if(window.scrollY <= 80){
        document.querySelector('.btn').style.display = 'none';
    }else{
        document.querySelector('.btn').style.display = 'block';
    }
}

// setInterval(btnOn, 100);

window.addEventListener('scroll', btnOn);

/////////////////////
let div = document.querySelector('.div');

div.addEventListener('scroll', display);

function display(){
    if(window.scrollY >= 431){
        div.style.display = 'block';
    }else{
        div.style.display = 'none';
        
    }
}
window.addEventListener('scroll', display);

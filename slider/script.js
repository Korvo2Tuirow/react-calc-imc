let q = (el) => document.querySelector(el);

let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSLide = 0;
let sliderWidth = q('.slider').clientWidth;

q('.slider-width').style.width = `${sliderWidth * totalSlides}px`;

q('.slider-controls').style.width = `${sliderWidth}px`;

q('.slider-controls').style.height = `${q('.slider').clientHeight}px`;

function voltar(){
    currentSLide--;
    if(currentSLide < 0){
        currentSLide = totalSlides - 1;        
    }
    updateMargin();
}

function proximo(){
    currentSLide++;
    if(currentSLide > (totalSlides -1)){
        currentSLide = 0;        
    }
    updateMargin();
}

function updateMargin(){
    let slideWidthItem = q('.slider-item').clientWidth;
    let newMargin = (currentSLide * slideWidthItem);
    q('.slider-width').style.marginLeft = `-${newMargin}px`;
}

setInterval(proximo, 5000);
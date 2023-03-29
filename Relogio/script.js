let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
//DIGITAL
digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;
 
//ANALÓGICO

let sDeg = (360/60) * seconds;
sElement.style.transform = `rotate(${sDeg - 90}deg)`;

let mDeg = ((360/60) * minutes - 90);
mElement.style.transform = `rotate(${mDeg}deg)`;

let hDeg = ((360/12) * hours - 90);
hElement.style.transform = `rotate(${hDeg}deg)`;



};

function fixZero(time){
    
    return time < 10 ? `0${time}` : time;
    /*if(time < 10){
        return '0'+time;
    }else{
        return time;
    }*/
}

setInterval( updateClock, 1000 );
updateClock();
let q = (el) => document.querySelector(el);

document.body.addEventListener('keydown', (event)=>{
   // console.log(event.code.toLowerCase());
    playSound(event.code.toLowerCase());

} );

q('.composer button').addEventListener('click', ()=>{

let song = q('#input').value;

if(song !== '') {
    let songArray = song.split('');
    console.log(songArray);

    playComposition(songArray);
};

});

function playSound(sound){

    let audioElement = q(`#s_${sound}`);
    let keyElement = q(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    };

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active'); 
        },300);
        
    };

};

function playComposition(songArray){

    let wait = 0;


    for(let songItem of songArray){

        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += range.value*10;        
    }       
};

let range = q('.range');

range.addEventListener('click', ()=>{

    console.log(range.value);
})

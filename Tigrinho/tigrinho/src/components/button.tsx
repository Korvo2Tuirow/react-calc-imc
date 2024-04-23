"use client"
import { useContext, useState } from 'react';
import { NumContext } from './ContextNumRandom';
import { AudioPlayer } from './audioPlayer';


export const Button = () => {

    const Ctx = useContext(NumContext);

    const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 9));

    const [numRandom, setNumRandom] = useState(initialNumRandom);

    const[playing, setPlaying] = useState(false);

    const teste = () => {

        const audioPlay = () => {
            const audio = new Audio();
            audio.play();        
        }
        if(Ctx?.fezTrio){
            Ctx.setValor(Ctx?.valor + 10);            
            Ctx.setFezTrio(false)
        }else{
            Ctx?.setValor(Ctx?.valor -1);
        }

        

        setNumRandom([])
        setNumRandom(prevNumRandom => [
            ...prevNumRandom,
            ...Array.from({ length: 9 }, () => Math.floor(Math.random() * 9))
        ]);

        Ctx?.setNumRandomProv(numRandom);  
        Ctx?.setAnima("null");
        setPlaying(true)  
       
       
        
    }

    return (
        <>
            <button className="m-10 border-4 border-[#1808ff] p-3 rounded-md font-bold  bg-gradient-to-r  from-[#1b1179]  to-[#1808ff]  text-white cursor-pointer shadow-md shadow-[#207] hover:scale-125" onClick={teste}>
                CLIQUE AQUI
            </button>

            <AudioPlayer src="./sound/tap-notification-180637.mp3"
                isPlaying={playing} />
         
            
        </>
    );
}

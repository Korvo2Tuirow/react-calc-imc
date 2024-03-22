import { useState } from 'react';
import { useContext } from "react"
import { NumContext } from "./ContextNumRandom"
export const Button = () => {
    let style = "m-10 border border-black p-3 rounded-md font-bold text-white bg-green-600 cursor-pointer";


    const NumCtx = useContext(NumContext);
    

   
    const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1));

    const [numRandom, setNumRandom] = useState(initialNumRandom);

    const teste = () => {
       
        setNumRandom([])
        setNumRandom(prevNumRandom => [
            ...prevNumRandom,
            ...Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1))
        ]);
     
        NumCtx?.setNumRandom(numRandom);
        console.log(numRandom);
    };  


    return (
        <>
        <button className={style} onClick={teste}>
            Click me
        </button>    
        
        </>
    );
};

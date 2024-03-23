"use client"
import { useContext, useState } from 'react';
import { NumContext } from './ContextNumRandom';


export const Button = () => {

    const NumCtx = useContext(NumContext);

    const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1));

    const [numRandom, setNumRandom] = useState(initialNumRandom);

    const v1 = [1,1,1];
    const v2 = [2,2,2];
    const v3 = [3,3,3];
    const v4 = [4,4,4];
    const v5 = [5,5,5];
    const v6 = [6,6,6];
    const v7 = [7,7,7];
    const v8 = [8,8,8];
    const v9 = [9,9,9];

    const teste = () => {

        setNumRandom([])
        setNumRandom(prevNumRandom => [
            ...prevNumRandom,
            ...Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1))
        ]);

        NumCtx?.setNumRandomProv(numRandom)
        console.log(numRandom); 
        
        const c1 = numRandom.slice(0,3);
        const c2 = numRandom.slice(3,6);
        const c3 = numRandom.slice(6,9);  
        console.log(c2)       
    };

    return (
        <>
            <button className="m-10 border border-black p-3 rounded-md font-bold bgBtn cursor-pointer shadow-md shadow-black" onClick={teste}>
                CLIQUE AQUI
            </button>

        </>
    );
};

'use client'

import { useState } from "react";  
    
    
    export const Contador = () =>{
        const [count, setCount] = useState<number>(0);

        const contar=()=>{
            setCount(count+1);
        }

        const zerar=()=>{
            setCount(0);
        }

       
        const [show, setShow] = useState<boolean>(false);
        const mostrar =()=>{
            setShow(!show)
        }

        return(
        <>
        <div className="flex bg-blue-800 justify-center items-center flex-col p-40 mb-10">
            <p className="text-5xl" >{count}</p>
            <button onClick={contar} className="p-3 border-green-400 border-2 bg-green-900  mt-5 rounded-lg">Somar + 1</button>
            <button onClick={zerar} className="p-3 border-red-600 border-2 bg-red-900  mt-5 rounded-lg">Zerar</button>
            
        </div>

        <div className="flex bg-green-600 justify-center items-center flex-col p-40">
            {show &&

        <div className=" rotate-in-center w-40 h-40 bg-cyan-400 text-black flex justify-center items-center m-10 ">Area Secreta</div>}
            <button onClick={mostrar} className="p-3 rounded-lg bg-sky-800 text-white">{show ? "Ocultar" : "Mostrar"}</button>



        </div>
        </>
    )
}


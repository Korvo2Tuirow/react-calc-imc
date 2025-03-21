"use client"

import { useRouter } from "next/navigation"

export const Tela2Button = () =>{
    
    const router = useRouter();
    router.prefetch('/tela2');
    
    const handleClick = ()=>{
        router.push('/tela2');
    }
    
    return(
        <button onClick={handleClick}>Ir para tela 2</button>
    )
}
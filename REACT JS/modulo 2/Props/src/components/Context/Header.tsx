import { useContext, useState } from "react";
import { OnlineUsers } from "./OnlineUsers"
import { CountContext } from "./constexts/CountContext";


export const Header = () =>{
    
    const countCtx = useContext(CountContext)
    return(
        <header className="h-screen mx-auto justify-center items-center flex flex-col bg-gradient-to-r to-blue-900 from-purple-800 ">
            
            <h1 className="text-3xl s">Título da Página</h1>
            
            <OnlineUsers />

        </header>
    )
}
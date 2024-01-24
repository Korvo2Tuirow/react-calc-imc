import { useContext } from "react"
import { CountContext } from "./constexts/CountContext"

export const OnlineUsers = () =>{

    
    const countCtx = useContext(CountContext)
   
    
    const handleBanAll = () =>{
        countCtx?.setOnlineCount(1010)
    }

    return(
        <>
        
        <p>Online: {countCtx?.onlineCount} </p>
        <button onClick={handleBanAll} className="border border-violet-600 p-3 m-5 rounded-md shadow-md shadow-black bg-violet-950">Banir todo mundo!!</button>
        </>
    )
}
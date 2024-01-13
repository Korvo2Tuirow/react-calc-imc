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
        <button onClick={handleBanAll}>Banir todo mundo!!</button>
        </>
    )
}
import { useContext } from "react"
import { NumContext } from "./ContextNumRandom";

export const Aposta = ()=>{    
    
    const Ctx = useContext(NumContext);  
    
    const modal = () =>{
        const exit = document.getElementById("modal");
        exit?.classList.remove("hidden");          
        
    }

    return(
        <div className=" bg-white rounded-md w-[90%] max-w-[500px] p-3 flex justify-between shadow-lg shadow-black">
            <p>Banca: {Ctx?.fezTrio && Ctx?.valor +10 || Ctx?.valor} </p>
            <button onClick={modal}>Apostar</button> 
        </div>
    )
}


import { useContext } from "react"
import { NumContext } from "./ContextNumRandom"

export const Container = () => {
   
    const NumCtx = useContext(NumContext);
    const c1 = NumCtx?.numRandomProv.slice(0,3);
    const c2 = NumCtx?.numRandomProv.slice(3,6);
    const c3 = NumCtx?.numRandomProv.slice(6,9);
    console.log(c1);
    
        
    return (
        <div className="border p-4 flex mt-10 border-black max-w-[500px] w-[90%] h-[500px] max-h-[90%] ">
            <div className="w-[33.3%] border border-black m-3 flex flex-col">
               {c1?.map(e=>(<div className="w-full h-full border border-green-600">{e}</div>))} 
            </div>

            <div className="w-[33.3%] border border-black m-3 flex flex-col">

            {c2?.map(e=>(<div className="w-full h-full border border-green-600">{e}</div>))} 

            </div>

            <div className="w-[33.3%] border border-black m-3 flex flex-col">

            {c3?.map(e=>(<div className="w-full h-full border border-green-600">{e}</div>))} 

            </div>
        
        </div>
    )
}
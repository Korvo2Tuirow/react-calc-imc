
import React, { useContext, useEffect } from "react";
import { NumContext } from "./ContextNumRandom";

export const Container = () => {

    const Ctx = useContext(NumContext);   


    
    useEffect(()=>{
     Ctx?.setAnima("anima")  
     console.log(Ctx?.fezTrio); 
       
    },Ctx?.numRandomProv)

    return (
        <div className={`border bg-black/30 justify-center items-center shadow-lg shadow-[#207] p-4 flex m-10 border-gray-500  w-[100%] max-w-[493px] h-auto max-h-[493px]`}>
            <div className="w-[100%] grid grid-rows-3  mx-auto grid-cols-3 p-3">
                {Ctx?.numRandomProv.map((e, index) => (<div key={index} id={`id${index}`} className={`bg${e.toString()} cssDefault ${Ctx.anima}`} ></div>))}
            </div>         

        </div>
    )

}
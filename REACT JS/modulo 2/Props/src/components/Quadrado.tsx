import { useEffect } from "react"


export const Quadrado = () =>{

    useEffect(() => {
      console.log("Usou o Efect do Quadrado");
    
      return () => {
        console.log("Desligou o Efect")
      }
    })
    

    return(
        <div className="w-40 h-40 bg-red-800"></div>
    )
}



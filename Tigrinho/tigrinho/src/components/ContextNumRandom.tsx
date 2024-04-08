
import { ReactNode, createContext, useState } from "react";

type ContextType={
    numRandomProv:number[];
    anima:string;
    animaC1: string;
    animaC2: string;
    animaC3: string;
    animaH1: string | void;
    animaH2: string | void;
    animaH3: string | void;
    valor: number;
    fezTrio: boolean;
    setAnimaC1:(b:string)=>void;
    setAnimaC2:(b:string)=>void;
    setAnimaC3:(b:string)=>void;
    setAnimaH1:(b:string)=>void;
    setAnimaH2:(b:string)=>void;
    setAnimaH3:(b:string)=>void;
    setNumRandomProv: (n:number[]) => void ;
    setAnima:(b:string)=>void ;
    setValor:(b:number)=>void;
    setFezTrio:(b:boolean)=>void;
}

export const NumContext = createContext<ContextType | null>(null);

export const NumRandomProvider = ({children}:{children: ReactNode})=>{
  
    const[numRandomProv, setNumRandomProv] = useState([0,1,2,3,4,5,6,7,8])
    const [anima, setAnima] = useState("")
    const [animaC1, setAnimaC1] = useState("")
    const [animaC2, setAnimaC2] = useState("")
    const [animaC3, setAnimaC3] = useState("")
    const [animaH1, setAnimaH1] = useState("")
    const [animaH2, setAnimaH2] = useState("")
    const [animaH3, setAnimaH3] = useState("")
    const [valor, setValor] = useState(0)
    const [fezTrio, setFezTrio] = useState(false)

    
    return(
        <NumContext.Provider value={{numRandomProv,setNumRandomProv, anima, setAnima, animaC1, setAnimaC1, animaC2, setAnimaC2, animaC3,setAnimaC3,animaH1, setAnimaH1, animaH2, setAnimaH2, animaH3, setAnimaH3, valor, setValor, fezTrio, setFezTrio}} >
            {children}
        </NumContext.Provider>
    )
}
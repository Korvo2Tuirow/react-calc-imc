
import { ReactNode, createContext, useState } from "react";

type ContextType={
    numRandomProv:number[];
    setNumRandomProv: (n:number[]) => void ;
}

const initialNumRandom = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10 + 1));
console.log(initialNumRandom)

export const NumContext = createContext<ContextType | null>(null);

export const NumRandomProvider = ({children}:{children: ReactNode})=>{
  
    const[numRandomProv, setNumRandomProv] = useState([0,1,2,3,4,5,6,7,8,9])
    
    return(
        <NumContext.Provider value={{numRandomProv,setNumRandomProv}}>
            {children}
        </NumContext.Provider>
    )
}
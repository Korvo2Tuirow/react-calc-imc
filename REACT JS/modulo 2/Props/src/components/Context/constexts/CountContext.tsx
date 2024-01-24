import { ReactNode, createContext, useState } from "react";

export const CountInitialData = 0; 
type CountextType = {
    onlineCount: number,
    setOnlineCount: (n:number) => void;
}
 
export const CountContext = createContext<CountextType | null>(null);

type Props={
    children: ReactNode;
}
export const CountProvider = ({children}:Props) =>{
    const [onlineCount, setOnlineCount] = useState(30);
    return (
        <CountContext.Provider value={{onlineCount,setOnlineCount}}>
            {children}
        </CountContext.Provider>
    )
}

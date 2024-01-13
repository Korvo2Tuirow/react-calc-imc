import { createContext } from "react";

export const CountInitialData = 0; 
type CountextType = {
    onlineCount: number,
    setOnlineCount: (n:number) => void;
}
 
export const CountContext = createContext<CountextType | null>(null);

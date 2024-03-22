import { createContext } from "react";

type ContextType={
    numRandom:number[];
    setNumRandom: (n: number[]) => void;
}

export const NumContext = createContext<ContextType | null>(null);
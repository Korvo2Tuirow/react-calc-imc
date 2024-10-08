import React, {  createContext } from "react"

type ContextType = {
    name: string,
    age:number
}

const initialState = {
    name: "Korvo",
    age: 39
}

type Props = {
    children: React.ReactNode
}

export const Context = createContext<ContextType>(initialState);

 export const ContextProvider = ({children}:Props)=>{
     return (
     <Context.Provider value={initialState}>{children}</Context.Provider>
 )
 }


import { useContext, useState } from "react";
import { Contexto, nameInitial } from "./Contextos";

export const Context2 = () => {

    const [name, setName] = useState('Korvo');



    return (
        <Contexto.Provider value={name}>
            <div className=" h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 to-slate-900 ">
                <div className="flex flex-col justify-center items-center border p-10 rounded-md bg-opacity-10 bg-blue-400">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="font-bold text-6xl p-5">UseContext</h1>
                        <p className="p-3 text-2xl border border-green-600 m-3 bg-cyan-950 rounded-md min-w-[248px] h-16">{name}</p>
                    </div>
                    <input type="text"
                        className="text-black font-bold p-3 mt-5"
                        onChange={e => setName(e.target.value)} />
                    <ChildrenOne />
                </div>
            </div>
        </Contexto.Provider>
    )
}

export const ChildrenOne = () => {
    return <ChildrenTwo />
}

export const ChildrenTwo = () => {

    const nameContext = useContext(Contexto);

    return (
        <>
            <p className="p-5 ">Passando a informação pelo Context:</p> 
            <p className="text-2xl border border-blue-600  bg-violet-950 rounded-md p-3 min-w-[248px] h-16">{nameContext}</p>
        </>
    )
}
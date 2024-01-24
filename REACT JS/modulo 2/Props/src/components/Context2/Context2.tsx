import { useContext, useState } from "react";
import { Contexto, nameInitial } from "./Contextos";

export const Context2 = () => {

    const [name, setName] = useState('Korvo');



    return (
        <Contexto.Provider value={name}>
            <div className=" h-screen flex flex-col justify-center items-center bg-slate-700 ">
                <div>{name}</div>
                <input type="text"
                    className="text-black font-bold"
                    onChange={e => setName(e.target.value)} />
                <ChildrenOne />
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
            <p className="p-5">Passando a indormção pelo Context:</p> 
            <p>{nameContext}</p>
        </>
    )
}
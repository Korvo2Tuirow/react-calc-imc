import { useState } from "react";

export const Objetos = () => {

    type Props = {
        name: string,
        lastname: string
    }

    const [fullName, setFullName] = useState<Props>({ name: '', lastname: '' })



    return (
        <div className="flex flex-col justify-center items-center p-10 bg-gradient-to-r to-sky-800 from-green-900">
            <h1 className="text-4xl">Atualizando Objetos em State</h1>
            <input
                type="text"
                placeholder="Nome"
                className="p-3 m-4 text-black rounded-lg"
                value={fullName.name}
                onChange={e=>setFullName({...fullName, name: e.target.value})}
            />

            <input
                type="text"
                placeholder="Sobrenome"
                className="p-3 m-4 text-black rounded-md"
                value={fullName.lastname}
                onChange={e=>setFullName({...fullName, lastname: e.target.value})}
            />

            <p className="font-bold">Meu nome completo é : {fullName.name} {fullName.lastname} </p>

        </div>

    )

}
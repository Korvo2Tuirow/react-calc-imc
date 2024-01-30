import { SetStateAction, useContext, useState } from "react";
import { LoggedUserContext } from "./LoggedUser";


export const Logon = () => {
    const loggedUserCtx = useContext(LoggedUserContext);
    const [user, setUser] = useState('');
    

    const logout = () => {
        loggedUserCtx?.setName('')
        setUser('')
    }

    const username =(event: { target: { value: SetStateAction<string>; }; }) => {
       setUser(event.target.value)
        console.log(user)
    }

    const logar=()=>{
        loggedUserCtx?.setName(user);
        if(!user){
            alert("Por favor insira um usuário");
        }
    }

    return (

        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-cyan-800">

            <div className=" flex flex-col justify-center items-center border border-blue-300 p-10 rounded-md bg-sky-800 min-w-[500px] shadow-2xl shadow-gray-950">
                <h1 className="text-2xl font-bold mb-9 ">TELA DE LOGIN</h1>
                {loggedUserCtx?.name &&
                    <>
                        <p className="mb-9 text-2xl ">Usuário logado: {loggedUserCtx?.name}</p>
                        <button
                            className="border-zinc-900 border p-3 rounded-md bg-red-600 hover:scale-110"
                            onClick={logout}
                        >Logoff</button>
                    </>
                }
                {loggedUserCtx?.name === null || loggedUserCtx?.name == ''   &&
                <>
                    <input type="text" placeholder='Usuário' onChange={username}
                     className="text-black p-2 rounded-md "/><br/>
                    <button onClick={logar} className="border-zinc-900 border p-3 rounded-md bg-green-600 hover:scale-110">Logar</button>
                </>
                
                }
            </div>
        </div>

    )


}
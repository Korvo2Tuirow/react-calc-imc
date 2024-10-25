import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/Context"

export const ShowData = () => {

    const { state } = useContext(Context)

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="flex justify-center font-bold text-5xl">ShowData</h1>

            <div className="bg-slate-300 flex flex-col p-10 rounded-md w-1/3 gap-5 m-5 shadow shadow-black">

                {state.user.name && state.user.age &&
                    <div>
                        <p className="bg-white border border-blue-400 p-1 rounded-md ">Nome: {state.user.name}</p>
                        
                        <p className="bg-white border border-blue-400 p-1 rounded-md mt-2">Idade: {state.user.age}</p>
                    </div>
                }
                {!state.user.name && !state.user.age &&
                    <div>
                        <p className="flex justify-center font-bold text-xl text-black ">Usuario não cadastrado!</p>
                    </div>
                }
            </div>

            <Link to="/" className="p-3 bg-red-600 text-white font-bold rounded-md shadow-md shadow-black">Voltar para SignUp</Link>
        </div>
    )
}
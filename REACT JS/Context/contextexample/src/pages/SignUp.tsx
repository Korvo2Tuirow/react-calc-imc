/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom"
import { Context } from "../contexts/Context"
import React, { useContext, useState } from "react"

export const SignUp = () => {

    const {state, dispatch} = useContext(Context);

    //ou const {name, age} = useContext(Context); 
    //nome: {name} bla bla bla

   // const [nameInput, setNameInput] = useState(state.user.name);
    //const [ageInput, setAgeInput] = useState<number |any>(state.user.age);

    const handleNameChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload:{
                name: e.target.value
            }
        });
        //setNameInput(e.target.value)
    };

    const handleAgeChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_AGE',
            payload:{
                age: parseInt(e.target.value)
            }
        })
       // setAgeInput( parseInt(e.target.value))
    };

  {/* const handleSave = () =>{
        dispatch({
            type: 'CHANGE_NAME',
            payload:{
                name: nameInput
            }
        });

        dispatch({
            type: 'CHANGE_AGE',
            payload:{
                age: ageInput
            }
        })
    }   */}
 

    return (
        <div className=" justify-center flex flex-col items-center gap-5 ">
            <h1 className="text-5xl font-bold">SignUp ({state.theme.status})</h1>
            <hr />

            <div className="flex flex-col gap-3 w-1/2  bg-slate-300 p-10 shadow-md shadow-black/70 rounded-md">
                <input type="text"
                value={state.user.name}
                onChange={handleNameChange}
                 placeholder="Digite seu nome" 
                 className="p-1 border border-blue-400"/>

                <input type="number"  
                placeholder="Digite sua Idade" 
                value={state.user.age}
                onChange={handleAgeChange}
                className="p-1 border border-blue-400"
                min={0}/>

                {/*<div className="flex justify-end">
                    <button
                    onClick={handleSave}
                    className="bg-green-700 p-2 max-w-sm text-white rounded-md shadow-md shadow-black"
                    > Salvar</button>
                </div>*/}

            </div>

            <Link to="/exibir" className="p-3 bg-blue-500 text-white rounded-md shadow-md shadow-black">Ir para ShowData</Link>
        </div>
    )
}
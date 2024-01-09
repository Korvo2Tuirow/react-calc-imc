"use client"
import { ListReducer } from "@/reducer/listReducer";
import { ItemReducer } from "@/types/itemReducer";
import { useReducer, useState } from "react"

export const Reducer = () =>{

    const [ list, dispatch] = useReducer(ListReducer, []);
    const [addField, setAddField] = useState('')

    const handleAddButton = () =>{
        if(addField.trim() === '') return false;

        dispatch({
            type: 'add',
            payload: {
                text: addField.trim(),
                                
            }
        })
        setAddField('')
    }

    const handleDoneCheckBox = (id:number) =>{
        dispatch({
            type:'toggleDone',
            payload: {id}
        });
        
    }

  



    return (
        <div className=" container mx-auto h-screen pt-20">
            <h1 className="text-center text-4xl bold my-4">Lista de Tarefas - (REDUCER)</h1>

            <div className="border border-gray-00 p-4 my-4 flex bg-gray-900">
                
                <input type="text" 
                className="border border-white p-3 bg-transparent text-white flex-1 " placeholder="Digite um item"
                value={addField}
                onChange={e=>setAddField(e.target.value)}/>
               
                <button onClick={handleAddButton}
                className="p-4 hover:bg-teal-500 text-center ml-5 bg-teal-400 rounded-md text-black font-bold">ADICIONAR</button>
            </div>
            <ul>
                {list.map(item =>(                     
                            
                            <li
                            key={item.id}
                            className="border border-gray-700 p-3 bg-slate-100 text-black rounded-md flex flex-1 items-center mb-5">
                              
                            <input type="checkbox" 
                                   className="w-6 h-6 mr-3"                                   
                                   onClick={()=>handleDoneCheckBox(item.id)}
                                   defaultChecked={item.done} />

                            <p className="flex flex-1 items-center">{item.text}</p>

                            <button  className="p-4 hover:bg-blue-900 text-center ml-5 bg-blue-950 rounded-md  text-white">Editar</button>

                            <button  className="p-4 hover:bg-red-950 text-center ml-5 bg-red-900 rounded-md text-white">Excluir</button>
                           
                            </li>
                           
                       
                ))
                }
            </ul>
            
        </div>
    )
}
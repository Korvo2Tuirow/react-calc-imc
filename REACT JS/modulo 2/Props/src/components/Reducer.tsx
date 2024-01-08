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
                text: addField.trim()
            }
        })
        setAddField('')
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
                className="p-4 hover:bg-green-900 text-center ml-5 bg-green-950 rounded-md">ADICIONAR</button>
            </div>
            <ul>
                {list.map(item =>(
                        <li key={item.id}>
                            {item.text}
                        </li>
                ))
                }
            </ul>
            
        </div>
    )
}
import { useState } from "react";

export const Arrays = () => {
    type TodoItem = {
        label: string,
        checked: boolean
    }

    const [itemInput, setItemInput] = useState('');

    const [list, setList] = useState<TodoItem[]>([

        { label: "Fazer Algo", checked: false },
        { label: "Dormir", checked: false }

    ])

    const addButton = () =>{
        if (itemInput.trim() === '') return;

        setList([...list, {label : itemInput ,checked :false}]);
        setItemInput('');
        
    }
    const del = (index:number) =>{
     const newList = setList(list.filter((item, key)=>key !== index));
    }

    

    return (
        <div className="flex flex-col items-center text-2xl mb-10">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="m-5 flex flex-col items-center p-14 border border-spacing-2 border-sky-500 rounded-xl bg-sky-800">
                <div className="flex my-3  rounded-md mb-10">
                    <input
                        type="text"
                        placeholder="Nova tarefa"
                        className="flex-1 border border-black p-3 text-2xl text-black rounded-md"
                        value={itemInput}
                        onChange={e=>setItemInput(e.target.value)}
                    />
                    <button onClick={addButton} className="bg-slate-600 ml-4 p-3 rounded-md">Adicionar</button>
                </div>
                <p className="mb-4">{list.length} Itens na lista</p>
                <ul className="list-disc">
                    {list.map((item, index) =>
                        <li key={index} className="p-3"> {item.label} - <button onClick={() => del(index)}>[deletar]</button><hr /></li>
                              
                    )}
                    
                </ul>
            </div>
                       
        </div>
    );
}
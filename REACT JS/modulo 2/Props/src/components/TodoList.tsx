import { useState } from "react";

export const TodoList = () => {

    type Props={
        texto: string,
        completado: boolean
    };
    
    const [tarefa, setTarefa] = useState('');

    const [list, setList] = useState<Props[]>([
        {
            texto: '',
            completado: false
        }
    ]);

    const add= () =>{
        if(tarefa.trim() === '') return; //evita adicionar tarefas vazias
        setList([...list, {texto: tarefa, completado:false}])
        setTarefa('')
    }

    return (
        < div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-l to-blue-700 from-pink-600 p-10">
            <h1>To do List</h1>

            <p>{list.length}</p>

            <input type="text"
            className="text-black"
            value={tarefa}
            onChange={e=>setTarefa(e.target.value)}
            />
            <ul>
             
                {list.map((todo) => (
                
                    <li>
                        {todo.texto} <button className=" p-3 bg-red-700 rounded-md">X</button>
                    </li> 
                
                )) }
            </ul>
            <div className="flex gap-3">
                
                <button onClick={add} className=" p-3 bg-green-700 rounded-md">Adicionar</button>
                
            </div>
        </div>
    )
}
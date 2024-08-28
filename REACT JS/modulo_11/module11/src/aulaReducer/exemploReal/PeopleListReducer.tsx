import { usePeopleList } from "./hookPeopleList"
import { ChangeEvent, useState } from "react";


export const PeopleListReducer = () => {

    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleAdd = () => {
        if (nameInput) {
            dispatch({
                type: 'Add',
                payload: {
                    name: nameInput
                }
            })
            setNameInput('');
        };
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const deletePerson = (id: string) => {
        dispatch({
            type: 'Del',
            payload: { id }
        });
    }

    const handleOrder =()=>{
        dispatch({
            type: 'Order',
        })
    }

    return (
        <div className="p-5 border mt-5 rounded-md bg-cyan-900">

            <input
                type="text"
                className="text-black p-2 mr-2"
                onChange={handleInputChange}
                value={nameInput} />

            <button
                onClick={handleAdd}
                className="p-2 rounded-md bg-green-700">
                Adicionar
            </button>

            <button 
                className="p-2 ml-3 rounded-md bg-gray-500"
                onClick={handleOrder}>
                    Ordenar
            </button>



            <ul>
                {list.map((item, index) => (
                    <li key={index}
                        className="flex justify-between p-2 bg-white/10 rounded-md my-3">
                        {item.name}
                        <button
                            className="text-red-500 font-bold rounded-full "
                            onClick={() => deletePerson(item.id)}
                        >X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
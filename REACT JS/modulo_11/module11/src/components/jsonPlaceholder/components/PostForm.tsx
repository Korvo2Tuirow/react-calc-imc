import { useState, ChangeEvent } from "react";
import { api } from "../api/api"


export const PostForm = ()=>{

    const [addTitle, setAddTitles] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitles(e.target.value)
    }

    const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    const handleAddPost = async () => {
        if (addBodyText && addTitle) {
            const req = api.addNewPost(addTitle, addBodyText, 1)                  
        }else{
            alert("Preencha os dados");
        }        
    }

    return(
        <>
        <fieldset className="border-2 mb-3 p-3 bg-sky-950 rounded-md">
        <legend className="font-bold text-2xl">Adicionar novo Post</legend>
        <input
            value={addTitle}
            onChange={handleAddTitle}
            type="text"
            placeholder="Digite um título"
            className="block border text-black p-1 mb-3 w-full " />

        <textarea
            value={addBodyText}
            className="block border text-black p-1 w-full mb-3 min-h-32"
            onChange={handleAddBody}></textarea>
        
        <div className="flex justify-end">    
            <button className="block border p-3 bg-green-900 rounded-md" onClick={handleAddPost}>Adicionar</button>
        </div>

    </fieldset>
    </>
    );
}
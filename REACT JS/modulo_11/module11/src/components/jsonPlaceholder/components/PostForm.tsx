import { useState, ChangeEvent } from "react";


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
            let response = await fetch("https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: addTitle,
                        body: addBodyText,
                        userId: 1
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                }
            )
            let json = await response.json();
            console.log(json);

            if(json.id){
                alert("Post added successfully");
                setAddTitles('');
                setAddBodyText('');
            }else{
                alert("Error")
            }

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
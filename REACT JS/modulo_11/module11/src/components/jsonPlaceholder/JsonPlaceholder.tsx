"use client"

import { ChangeEvent, useState } from "react";
import { Posts } from "./type"

export const JsonPlaceholder = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [addTitle, setAddTitles] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handlePosts = async () => {
        const req = await fetch("https://jsonplaceholder.typicode.com/posts");
        const resp = await req.json();
        setPosts(resp);

        if (posts.length > 0) {
            setPosts([])
        }
    }

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
                alert("Post added successfully")
            }else{
                alert("Error")
            }

        }else{
            alert("Preencha os dados");
        }
    }

    return (
        <div className="">
            <button
                onClick={handlePosts}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out w-full"
            >JsonPlaceholder</button>

            <div>
                {posts.length > 0 && <>
                    <div className="border-b my-5">Total de posts : {posts.length}</div>

                    <fieldset className="border-2 mb-3 p-3">
                        <legend>Adicionar novo Post</legend>
                        <input
                            value={addTitle}
                            onChange={handleAddTitle}
                            type="text"
                            placeholder="Digite um título"
                            className="block border text-black" />

                        <textarea
                            value={addBodyText}
                            className="block border text-black"
                            onChange={handleAddBody}></textarea>

                        <button className="block border" onClick={handleAddPost}>Adicionar</button>
                    </fieldset>
                </>
                }

                {posts.map((item) => (
                    <div key={item.id} className="bg-slate-800 p-3 rounded-md flex flex-col gap-2 mb-2">
                        <p>Usuario: {item.userId}</p>
                        <p>Titulo: {item.title}</p>
                        <p>{item.body}</p>

                    </div>
                ))}






            </div>
        </div>
    )
}
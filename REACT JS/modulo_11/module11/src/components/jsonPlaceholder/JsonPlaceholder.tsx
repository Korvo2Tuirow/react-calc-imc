"use client"

import { useState } from "react";
import {Posts} from "./type"

export const JsonPlaceholder =() =>{
    const [posts, setPosts] = useState<Posts[]>([])

    const handlePosts =  async () =>{
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resp = await req.json();
    setPosts(resp);

    if(posts.length > 0){
        setPosts([])
    }

    }


    return(
        <div className="">
            <button 
            onClick={handlePosts}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out w-full"
            >JsonPlaceholder</button>

            <div>
                {posts.length > 0 &&
                  <div className="border-b my-5">Total de posts : {posts.length}</div>
                }
                  {posts.map((item)=>(
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
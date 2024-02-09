import { useContext, useState } from "react"
import { ContextPost } from "./ContextsPosts"
import { PostList } from "./PostList"


export const PostContext = () =>{
    const postCtx = useContext(ContextPost)
    
    const[tituloInput, SetTituloInput] = useState('');
    const[textoInput, setTextoInput]= useState('');

    const adicionar=()=>{
        if(tituloInput && textoInput){
            postCtx?.dispatch({
                type: "add",
                payload:{
                    titulo: tituloInput,
                    texto: textoInput
                }
            });
            SetTituloInput("");
            setTextoInput("");
        }
    }


    return(
        <div className="flex flex-col h-full items-center max-w-screen bg-blue-500 p-3">
            
            <header className="p-5 mt-20  border border-zinc-500 rounded-md flex justify-center items-center mb-10 bg-cyan-900 shadow-2xl shadow-black">
                <h1 className="font-extrabold text-3xl">Post Context com Reducer</h1>
            </header>

            <div className="flex flex-col gap-10 rounded-md border border-teal-900 p-10 text-black bg-sky-700 w-1/2 ">

                <input type="text" id="titulo" placeholder="Digite o título" className="p-2"
                       value={tituloInput}
                       onChange={e=>SetTituloInput(e.target.value)}/>

                <textarea id="text" placeholder="Digite o texto" className="h-[300px] p-2"
                          value={textoInput}
                          onChange={e=>setTextoInput(e.target.value)}/>

                <button onClick={adicionar} className="p-5 text-white border border-stone-400 bg-green-700 rounded-md hover:bg-green-600">Adicionar</button>

                  
                          
            </div>

            <div>
                <PostList/>
            </div>

            <div className="mt-10 pb-20 flex ">
                <p>Total de Posts: {postCtx?.posts.length}</p>
            </div>

        </div>
    )
}
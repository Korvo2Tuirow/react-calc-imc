import { useContext } from "react"
import { ContextPost } from "./ContextsPosts"

export const PostList = () => {
    const postCtx = useContext(ContextPost)

    const remove=(id:number)=>{
        postCtx?.removePost(id)
    }

    return (
        <div className="text-black flex flex-col justify-center items-center"> 
            {postCtx?.posts.map(item => (

                <div key={item.id} className="rounded-md  bg-white my-3 w-1/2 min-w-[600px]">

                    <div className="flex rounded-t-md font-bold text-2xl items-center bg-slate-200 p-2  justify-between">{item.titulo}
                    <button onClick={()=>remove(item.id)} className="p-2 text-sm rounded-md text-white border border-stone-400 bg-red-700 hover:bg-red-600">X</button></div>

                    <div className=" p-3 ">{item.texto}</div>
                   
                </div>
            ))}
        </div>
    )
}
import { useContext } from "react"
import { ContextPost } from "./ContextsPosts"

export const PostList = () => {
    const postCtx = useContext(ContextPost)

    const remove=(id:number)=>{
        postCtx?.removePost(id)
    }

    return (
        <div className=" bg-neutral-50 text-black min-w-[600px] m-10">
            {postCtx?.posts.map(item => (

                <div key={item.id}>
                    <div className="flex font-bold text-2xl m-10 bg-slate-200 p-2 rounded-md justify-between">Titulo: {item.titulo}
                    <button onClick={()=>remove(item.id)} className="p-2 text-sm text-white border border-stone-400 bg-red-700">X</button></div>
                    <div className="m-16 border-b border-gray-950 pb-3">{item.texto}</div>
                   
                </div>
            ))}
        </div>
    )
}
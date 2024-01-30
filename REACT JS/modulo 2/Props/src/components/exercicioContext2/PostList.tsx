import { useContext } from "react"
import { ContextPost } from "./ContextsPosts"

export const PostList = () => {
    const postCtx = useContext(ContextPost)

    return (
        <div className=" bg-neutral-50 text-black min-w-[600px] m-10">
            {postCtx?.posts.map(item => (

                <div key={item.id}>
                    <div className="font-bold text-2xl m-10 bg-slate-200 p-2 rounded-md">Titulo: {item.titulo}</div>
                    <div className="m-16 border-b border-gray-950 pb-3">{item.texto}</div>
                   
                </div>
            ))}
        </div>
    )
}
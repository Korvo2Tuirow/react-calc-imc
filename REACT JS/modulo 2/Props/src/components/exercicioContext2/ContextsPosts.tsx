import { ReactNode, createContext, useState } from "react"

type Post={
    id:number,
    texto:string,
    titulo:string
}

type PostContextType={
    posts:Post[];
    addPost:(titulo:string, texto:string) => void
}
export const ContextPost = createContext<PostContextType | null>(null);

export const PostProvider = ({children}:{children: ReactNode}) =>{

const[posts, setPosts] = useState<Post[]>([]);

const addPost = (titulo:string, texto:string)=>{
    setPosts([
        ...posts, {id:posts.length, titulo, texto}
    ])
}

return(
    <ContextPost.Provider value={{posts, addPost}}>
        {children}
    </ContextPost.Provider>
)
}

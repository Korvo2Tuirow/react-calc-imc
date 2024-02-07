import { ReactNode, createContext, useReducer, useState } from "react"
import { PostReducer } from "./PostReducer";

export type Post = {
    id: number,
    texto: string,
    titulo: string
}

type PostContextType = {
    posts: Post[];
    addPost: (titulo: string, texto: string) => void
    removePost:(id:number)=> void;
}
export const ContextPost = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {

    const[posts, dispatch] = useReducer(PostReducer, []);
    //const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (titulo: string, texto: string) => {
    //   setPosts([
    //        ...posts, { id: posts.length, titulo, texto }
    //    ])
    dispatch({ type: "add", payload:{titulo, texto}})
    }

    const removePost=(id:number)=>{
        dispatch({type: "remove", payload:{id}})
    }

    return (
        <ContextPost.Provider value={{ posts, addPost, removePost }}>
            {children}
        </ContextPost.Provider>
    )
}

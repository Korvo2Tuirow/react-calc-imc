import { Dispatch, ReactNode, createContext, useEffect, useReducer,  } from "react"
import { PostActions, PostReducer } from "./PostReducer";

export type Post = {
    id: number,
    texto: string,
    titulo: string
}

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}

const STORAGE_KEY = 'postsStorage';

export const ContextPost = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {

    const[posts, dispatch] = useReducer(
        PostReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    //const [posts, setPosts] = useState<Post[]>([]);
    )

    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    },[posts])
    

    return (
        <ContextPost.Provider value={{ posts, dispatch }}>
            {children}
        </ContextPost.Provider>
    )
}

import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts =()=>{

    const query = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
       // staleTime: Infinity  ou em milisegundos
      });
      return query;
}

export const usePost = (id:number) =>{
   return useQuery({
        queryKey:['post', id],
        queryFn: () => getPost(id),
        // staleTime: Infinity  ou em milisegundos
    })

}


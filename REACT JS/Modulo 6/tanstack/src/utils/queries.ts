import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts =(enabled: boolean, limit:number, start:number)=>{

    const query = useQuery({
        queryKey: ['posts',{limit, start}],
        queryFn: ()=>getPosts(limit, start),
       // staleTime: Infinity  ou em milisegundos
       enabled,       
       
      });
      return query;
}

export const usePost = (id:number, enabled:boolean) =>{
   return useQuery({
        queryKey:['post', id],
        queryFn: () => getPost(id),
        // staleTime: Infinity  ou em milisegundos
        enabled
    })

}


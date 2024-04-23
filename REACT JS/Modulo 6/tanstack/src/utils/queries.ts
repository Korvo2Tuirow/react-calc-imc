import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { dataPosts } from "@/data/dataposts";
import { Providers } from "./providers";
import { queryClient } from "./queryClient";

export const usePosts =(enabled: boolean, limit:number, start:number)=>{

    const query = useQuery({
        queryKey: ['posts',{limit, start}],
        queryFn: ()=>getPosts(limit, start),
       // staleTime: Infinity  ou em milisegundos
       enabled,
       //initialData: dataPosts ou
       //placeholderData: dataPosts        
       
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

export const useUsers =()=>{

    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers     
       
      });
      return query;
}

export const useUsersPrefetch =()=>{
   const queryClient = useQueryClient();
   
    return queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers     
       

    });
}


export const invalidatePosts=()=>{
    queryClient.invalidateQueries({
        queryKey:['posts'],
        //exact: true
    });
}
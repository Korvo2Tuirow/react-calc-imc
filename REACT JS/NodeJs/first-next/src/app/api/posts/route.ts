import { Post } from "@/app/types/types";

//export const dynamic  = "force-dynamic"; // para NEXT 14
export const dynamic  = "force-static"; // para NEXT 15 não é cacheada por padrão
export async function GET(request: Request){

     const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const post: Post = await postRequest.json();
        return Response.json({post});
}

export async function POST(request: Request){

   
}

import { Post } from "@/app/types/types";
import { Metadata } from "next";


type Props={
    params:{
        postId:string;

    }
}




export const generateMetadata = async ({params}:Props): Promise<Metadata> =>{

    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    return {
        title: post.title.toUpperCase()
    }
}

export const Page = async ({params}:Props)=> {

    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post: Post = await postRequest.json();

    if(!post.id){
        return <div className="text-3xl text-center">Ops... Post não encontrado!</div>
    }    

   
    return (
     <div className="p-5 text-center">
        <div>ID: {post.id}</div>
      <h1 className="text-3xl uppercase">{post.title}</h1>
      <p className="my-10">{post.body}</p>
      <a href="../" className="bg-red-500 p-3 rounded-md">Voltar</a>
     </div>
    );
  }
  
  export default Page;

  export const generateStaticParams = async() =>{
    const postReq = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postReq.json();

    return posts.map(post => ({
        postId: post.id.toString()
    }));

  }
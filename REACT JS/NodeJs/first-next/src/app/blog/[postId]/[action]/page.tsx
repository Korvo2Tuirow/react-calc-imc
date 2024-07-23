type Props={
    params:{
        postId:string;
        action: string;
    }
}

const Page = ({params}:Props)=> {
    return (
     <div className="p-5">
      <h1>BLOG ID:  {params.postId} ({params.action})</h1>
      <a href="../">Voltar</a>
     </div>
    );
  }
  
  export default Page;
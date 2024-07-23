type Props={
    params:{
        slug:string[];
        
    }
}

const Page = ({params}:Props)=> {
    return (
     <div className="p-5">
      <h1>FILTROS:  {params.slug.join(', ')} </h1>
      <a href="../">Voltar</a>
     </div>
    );
  }
  
  export default Page;
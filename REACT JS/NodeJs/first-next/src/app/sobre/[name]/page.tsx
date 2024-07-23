type Props={
    params:{
        name:string;
    }
}

const Dinamica = ({params}:Props)=> {
    return (
     <div className="p-5">
      <h1>Rotas Dinamicas {params.name}</h1>
      <a href="../">Voltar</a>
     </div>
    );
  }
  
  export default Dinamica;
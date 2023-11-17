type Props = {
    frase: string;
    autor?: string;
    data?: String;

}

export const Cond = ({frase, autor, data}: Props)=>{
return(

    
    <div className="flex text-center border-2 border-lime-500 mt-14 p-10 justify-between" >
        <h3>{frase}</h3>
       
        <p>{autor ?? 'Autor Desconhecido'}</p> 

        {data && // se não tiver data ele sumira a tag p da tela (o negativo !data &&)
        <p>{data}</p>   
        }
    </div>
)
}
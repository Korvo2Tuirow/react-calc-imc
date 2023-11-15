type Props = {
    frase: string;
    autor?: string;

}

export const Cond = ({frase, autor}: Props)=>{
return(

    
    <div className="flex text-center border-2 border-lime-500 mt-14 p-10 justify-between" >
        <h3>{frase}</h3>
        <p>{autor ?? 'Autor Desconhecido'}</p>    
    
    </div>
)
}
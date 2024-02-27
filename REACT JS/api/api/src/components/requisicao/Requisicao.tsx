
import { useState } from "react"
import { UserType } from "./types/types";


export const Requisicao = () =>{
    
    const [users, setUsers] = useState<UserType[]>([]);
    const [style, setStyle] = useState('');

    const carregar =(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(json =>{

            console.log(json);
            setUsers(json)
            setStyle("border border-black p-3 rounded-md flex flex-col gap-3")
            
        }).catch(()=>{
           console.log( "ERRO AO CARREGAR DADOS");
        }).finally(()=>{
            console.log("Termino da função")
        });       
            
        });
   
   
    return(
        <div className="flex flex-col justify-center items-center h-screen gap-7"> 
            <h1 className="text-2xl">Requisição de API via Fetch</h1>         
           

            <ul className={style}>
                {users.map(item=>(
                    <li key={item.id}>Nome: { item.name} - {item.email}</li> 
                ) )}
            </ul>
           
            <button onClick={carregar} className=" border border-black bg-green-300 p-3 rounded-md ">Carregar mais usuários</button>
            
        </div>
    )
}
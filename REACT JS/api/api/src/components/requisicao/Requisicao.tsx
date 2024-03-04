

import { useEffect, useState } from "react"
import { UserType } from "./types/types";



export const Requisicao = () => {

    const [users, setUsers] = useState<UserType[]>([]);
    const [style, setStyle] = useState('');
    const [loading, setLoading] = useState(true);   
    
    
        const addNewPost = async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST', 
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title:'ReactJs',
                    body:"Essa é uma publicação feita através do ReactJS",
                    userId:1
                })
            }
            )
            
            const json = await res.json();
            console.log(json);

        }
    

    
        
        const getUsers = async () =>{
            
            setLoading(true);

            try{
                  
            const res = await fetch('http://jsonplaceholder.typicode.com/users'); 
            const json = await res.json();
            setUsers(json);
            setLoading(false);
            setStyle("border border-black p-3 rounded-md flex flex-col gap-3 shadow-md shadow-slate-400");

            }catch(error){
                setLoading(false)
                
                console.log("ERRO NA REQUISIÇÃO!")
                console.log(users)
            }
        
            setLoading(false)
        
        };
        
        useEffect(()=>{
            getUsers();
        },[]);
        
        /*
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                setLoading(true);
                console.log(json);
                setUsers(json);
                setStyle("border border-black p-3 rounded-md flex flex-col gap-3");

            }).catch(() => {
                console.log("ERRO AO CARREGAR DADOS");
         
            }).finally(() => {
                setLoading(false);
                console.log("Termino da função")
            });
            */
    //});


    return (
        <div className="flex flex-col justify-center items-center h-screen gap-7">
            <h1 className="text-2xl">Requisição de API via Fetch</h1>

            {loading && "Carregando..."}
            {!loading && users.length > 0 &&
                <ul className={style}>
                    {users.map(item => (
                        <li key={item.id}>Nome: {item.name} - {item.email}</li>
                    ))}
                </ul>
            }

            {!loading && users.length <= 0  && 
                <p> "Não há usuarios para exibir"</p>}

            <button className="border border-black bg-green-200 p-3 rounded-md shadow-md shadow-slate-700"
            onClick={addNewPost}>ADD</button>
        

        </div>
    )
}
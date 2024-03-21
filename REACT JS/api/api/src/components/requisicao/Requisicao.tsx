

import { useEffect, useState } from "react"
import { UserType } from "./types/types";




export const Requisicao = () => {

    const [users, setUsers] = useState<UserType[]>([]);
    const [style, setStyle] = useState('');
    const [loading, setLoading] = useState(true);


    const addNewPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    title: 'ReactJs',
                    body: "Essa é uma publicação feita através do ReactJS",
                    userId: 1
                })
            }
        )

        const json = await res.json();
        console.log(json);

    }




    const getUsers = async () => {

        setLoading(true);

        try {

            const res = await fetch('http://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setUsers(json);
            setLoading(false);
            setStyle("border border-black p-3 rounded-md flex flex-col gap-3 shadow-md shadow-slate-400 fade-in-fwd");

        } catch (error) {
            setLoading(false)

            console.log("ERRO NA REQUISIÇÃO!")
            console.log(users)
        }

        setLoading(false)

    };

    useEffect(() => {
        getUsers();
    }, []);

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

            {loading &&
               <div aria-label="Loading..." role="status" className="flex  items-center space-x-2">
               <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                   <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                   <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                       stroke-width="24"></line>
                   <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                   </line>
                   <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                       stroke-width="24"></line>
                   <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                   </line>
                   <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                       stroke-width="24"></line>
                   <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                   <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                   </line>
               </svg>
               <span className="text-4xl font-medium text-gray-500">Loading...</span>
           </div>

            }



            {!loading && users.length > 0 &&
                <ul className={style}>
                    {users.map(item => (
                        <li className="teste fade-in-fwd " key={item.id}>Nome: {item.name} - {item.email}</li>
                    ))}
                </ul>
            }

            {!loading && users.length <= 0 &&
                <p> "Não há usuarios para exibir"</p>}

            <button className="border border-black bg-green-200 p-3 rounded-md shadow-md shadow-slate-700"
                onClick={addNewPost}>ADD</button>


        </div>
    )
}
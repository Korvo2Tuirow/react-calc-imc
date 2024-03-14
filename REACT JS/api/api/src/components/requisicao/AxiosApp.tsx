
import axios from 'axios';
import { useState } from 'react';
import { api } from './types/api';
import { stringify } from 'querystring';

type Props = {
    id: number,
    title: string,
    userId: number
}

// npm i axios
export const AxiosApp = () => {

    const [albums, setAlbums] = useState<Props[]>([])
    const [classItem, setClassItem] = useState('hidden')
    const controller = new AbortController();

    const userParams = {
        userId: [2, 4]
    }

    const handleAxios = async () => {

        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                params: userParams,
                signal: controller.signal 
                }              
            
            );

            setAlbums(resp.data);
            setClassItem('border p-3 h-[500px] overflow-y-scroll')
            console.log(albums);

        } catch (e) {
            alert("ERRO NA REQUISIÇÃO DA API");
        }
    }

    const handlePostAxios = async () => {
        // POST - Adicionar um novo registro no servidor
        // instancia do api/axios

        const addAxios = await api.post('/posts', {
            title: "Novo Album",
            userId: 10
        });
        alert(stringify(addAxios.data));
        console.log(addAxios.data);
    }

    const handleCancel =()=>{
        controller.abort();
    }



    return (
        <div className='w-full min-h-screen  bg-gradient-to-b to-sky-950 from-blue-800 text-white flex justify-center items-center flex-col p-5'>

            <div className='flex justify-center w-full'>

                <div className='flex flex-col justify-center items-center'>
                    <button onClick={handleAxios} className=' mr-10 mb-10 border border-blue-700 bg-fuchsia-900 p-3 text-3xl rounded-md shadow-md shadow-black hover:scale-105'>REQUEST GET AXIOS</button>
                    
                    <button onClick={handleCancel} className=' mr-10 mb-10 border border-blue-700 bg-red-900 p-3 text-3xl rounded-md shadow-md shadow-black hover:scale-105'>CANCELAR REQUEST</button>                    
                </div>

                <button onClick={handlePostAxios} className='mb-10 border  h-3/4 border-blue-700 bg-green-900 p-3 text-3xl rounded-md shadow-md shadow-black hover:scale-105'>ADD POST AXIOS</button>
            </div>
         
            <div className={classItem} >
                {albums.map(item => (<div key={item.id} className='flex flex-col border border-white p-5 my-5 w-full  bg-white/10 hover:bg-white/25 '>
                    <p className='mb-2 flex '>ID: {item.id}</p>
                    <p className='mb-2 flex '>Title: {item.title}</p>
                    <p className='flex'>UserID: {item.userId}</p>
                </div>))}
            </div>
                
        </div>




    )
} 
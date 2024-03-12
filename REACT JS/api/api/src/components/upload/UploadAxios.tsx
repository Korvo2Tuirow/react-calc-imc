import axios from "axios";
import { useRef } from "react"


export const UploadAxios = ()=>{
    
    const fileInput = useRef<HTMLInputElement>(null)
    
    const enviar = async ()=>{
        if(fileInput.current?.files && fileInput.current.files.length > 0){
            const file = fileInput.current.files[0];

            const data = new FormData();
            data.append('name', 'Korvo');
            data.append('file', file)

            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)

            console.log(res.data)
        }
        
    }

    return(
        <div className="w-full h-screen bg-sky-900 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl">Upload File Using Axios</h1>
            <div className="flex flex-col p-5 mt-5 border border-stone-500 rounded-md items-center">
                <input type="file" 
                    ref={fileInput}
                    className="p-3 mb-5"  />

                <button onClick={enviar} className="bg-cyan-400 p-3 w-1/4 text-black">ENVIAR</button>
            </div>
        </div>
    )
}
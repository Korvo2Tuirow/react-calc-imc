import { useRef, useState } from "react"


export const Upload= () =>{

    const [legendInput, setlegendInput] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const enviar=async()=>{
        if(fileInputRef.current?.files && fileInputRef.current.files.length>0 ){

            const fileItem = fileInputRef.current.files[0];

            const allwed = ['image/png', 'image/jpeg', 'image/jpg']
            if(allwed.includes(fileItem.type)){

                const data = new FormData();
                data.append('image', fileItem);
                data.append('legend', legendInput);

                const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method:'POST',
                    headers:{
                        'content-type': 'multipart/form-data'
                    },
                    body:data
                });

                const json = await res.json();
                console.log(json);

            }else{
                alert("Arquivo incompatível");
            }
    
        }else{
            alert("Selecione um arquivo")
        }

    }



    return(
    <div className=" w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r to-green-200 from-blue-500">

        <h1 className="text-3xl mb-10">Upload de Imagens/Arquivos</h1>
        <div className="flex flex-col gap-4 border border-black p-5 rounded-md">
            
            <input type="file" 
                    ref={fileInputRef}/>
                    
            
            <input type="text" placeholder="Digite uma legenda" className=" p-2"
            value={legendInput}
            onChange={e=>setlegendInput(e.target.value)}/>
      
            <button className="bg-green-400 p-2" onClick={enviar}>Enviar 🧷</button>
        </div>



    </div>
    )
}
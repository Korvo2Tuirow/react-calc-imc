"use client"

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone";


export const Upload = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 3,
        accept: {
            'image/jpeg': ['.jpg']//mime type
        }
    });//DROPZONE // npm  i react-dropzone --legacy-peer-deps

    const [selectedFile, setSelectedFile] = useState<File>();
    const [legendField, setLegendField] = useState("");
    const [progressUpload, setProgressUpload] = useState<number>(0);
    const [viewProgress, setViewProgress] = useState(false);

    const [photoString, setPhotoString] = useState('');


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files);

       

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile(file);

            console.log(e.target.files[0]);
        }

    };

    const handleSubmit = async () => {

        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('legend', legendField);

            const url = "https://b7web.com.br/uploadtest/"
            const req = await axios.post(url, formData, {
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const pct = (progressEvent.loaded / progressEvent.total) * 100;
                        setProgressUpload(pct);
                        setViewProgress(true)
                    }
                }
            })
            progressViewTime();
            setPhotoString(URL.createObjectURL(selectedFile))

            console.log(req.data)

            /*
            const req = await fetch('https://b7web.com.br/uploadtest/', {
                method: 'POST',
                body: formData
            });
            const json = await req.json();
            
            console.log(json);
            */
        }

    };

    const progressViewTime = () => {

        setTimeout(() => {
            setViewProgress(false);
            setLegendField('');
            setSelectedFile(undefined);
        }, 5000)
    }


    //DROPZONE

    const handleDropzoneSubmit = async () => {

        const formData = new FormData();

        for(let i in acceptedFiles){
            formData.append(`file[${i}]`, acceptedFiles[i]);
        }// para multiplos arquivos enviados

      //  formData.append('file', acceptedFiles[0]);


        const url = "https://b7web.com.br/uploadtest/"
        const req = await axios.post(url, formData, {
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const pct = (progressEvent.loaded / progressEvent.total) * 100;
                    setProgressUpload(pct);
                    setViewProgress(true)
                }
            }
        })
        progressViewTime();
        setPhotoString(URL.createObjectURL(acceptedFiles[0]))
    }


    useEffect(() => {
        console.log(acceptedFiles)
        if (acceptedFiles.length > 0) {
            handleDropzoneSubmit();
        }
    }, [acceptedFiles])

    

    return (
        <div className=" flex flex-col gap-3 shadow-custom bg-slate-700 border  shadow-black p-5 items-center">
            <h1 className="flex text-2xl  justify-center mb-3">Processo de Upload</h1>

            {viewProgress || acceptedFiles &&
                <div className="flex flex-col justify-center items-center w-full">
                    {(progressUpload).toFixed(0)}%
                    <div className="w-full bg-slate-700 h-2">
                        <div className=" bg-green-500 h-2" style={{ width: progressUpload + "%" }}></div>
                    </div>
                </div>
            }

            <hr />

            <div className="bg-gray-400 p-5 h-80 flex justify-center items-center w-full max-w-[900px] " {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Arraste o arquivo aqui para fazer o upload</p>
            </div>

            <div>ARQUIVOS: {acceptedFiles.length}</div>

            <div className="flex flex-col p-5 items-center gap-5">
                <input type="file"
                    onChange={handleFileChange}
                />

                <input type="text"
                    placeholder="Digite uma legenda"
                    value={legendField}
                    onChange={e => setLegendField(e.target.value)}
                    className=" lg:w-1/4  sm:w-full p-2 text-black"
                />
                <button className="border p-3 bg-green-700 max-w-fit rounded-md shadow-black shadow-md hover:scale-105"
                    onClick={handleSubmit}
                >Enviar</button>
                {photoString &&

          
                    <img src={photoString} alt="imagem do upload" className="max-w-80 " />
                }
            </div>

        </div>
    )
}


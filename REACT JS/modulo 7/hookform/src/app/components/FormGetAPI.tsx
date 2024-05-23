"use client"

import { Form, useForm } from "react-hook-form"

export const FormGetAPI = () => {

    const { register, control } = useForm();

    const handleSucess = () => {
        alert("Enviado com sucesso")
    }

    const handleError = () => {
        alert("Erro na requisição")
    }



    return (
        <div className="container mx-auto bg-[#68134c] h-[500px] border border-white mt-5 ">


            <Form
                control={control}
                action={'https://jsonplaceholder.typicode.com/posts'}
                method="post"
                onSuccess={handleSucess}
                onError={handleError}
                className="flex flex-col justify-center items-center h-full gap-4 ">

                <h1 className="flex justify-center text-2xl text-white">Enviando dados para uma API
                </h1>
                <input {...register('title', { required: true })} className="border border-blue-950 p-3 text-black w-[500px] rounded-md" placeholder="TITULO" />
                <input {...register('body', { required: true })} className="border border-blue-950 p-3 text-black w-[500px] rounded-md" placeholder="TEXTO" />
                <input {...register('userId', { required: true })} className="border border-blue-950 p-3 text-black w-[500px] rounded-md" placeholder="USUARIO" />
                <button className="border border-white px-10 py-3 rounded-md bg-green-400 font-bold">Enviar</button>


            </Form>
        </div>
    )
}
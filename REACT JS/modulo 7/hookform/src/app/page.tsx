"use client"
// npm i react-hook-form para instalação

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  lastName: string;
  idade: number;

}

const Page = () => {

  const { handleSubmit, register } = useForm<Inputs>();

  const handleSubmitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);

  }

  return (

    <div className="bg-cyan-950 h-screen w-screen">

      <div className="flex flex-col gap-5 justify-center items-center border border-white text-white p-5 bg-slate-800">

        <h1 className="text-2xl">HOOK FORM</h1>

        <form onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-3 ">

          <label htmlFor="name">Nome</label>
          <input {...register('name', { required: true, minLength:2, maxLength:20 })}
            placeholder="Nome"
            className="w-[500px] p-2 text-black" />

          <label htmlFor="lastName">Sobrenome</label>
          <input {...register('lastName', { required: true, minLength:2, maxLength:50 })}
            placeholder="Sobrenome"
            className="w-[500px] p-2 text-black" />

          <label htmlFor="idade">Idade</label>
          <input {...register('idade', { required: true, min: 18, max:50 })}
            type="number"
            placeholder="Idade"
            className="w-[500px] p-2 text-black" />

          <input type="submit"
            value="Enviar"
            className="border border-gray-500 p-2 bg-green-700 font-bold cursor-pointer rounded-sm" />

        </form>
      </div>
    </div>



  )
};

export default Page;

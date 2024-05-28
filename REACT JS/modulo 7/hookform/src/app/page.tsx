"use client"
import { SignUpsForm } from "@/types/SignUpForm";
// npm i react-hook-form para instalação

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { FormPostAPI } from "./components/FormPostAPI";
import { ZodHookForm } from "./components/ZodHookForm";

const Page = () => {

  const {
    control,
    handleSubmit,
    //register,
    //formState: { errors }
  } = useForm<SignUpsForm>();

  const handleSubmitForm: SubmitHandler<SignUpsForm> = (data) => {
    console.log(data);

  }

  return (

    <div className="bg-cyan-950 h-full w-full">

      <div className="flex flex-col gap-5 justify-center items-center border border-white container mx-auto bg-[#1a214b] h-[500px]">

        <h1 className="text-2xl text-white">HOOK FORM</h1>

        <form onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-3 border p-5 rounded-md bg-white/10 ">

          <Input
            control={control}
            name="Nome"
            rules={{ required: true, minLength: 2, maxLength: 20 }}
          />
          {/*
          <label htmlFor="name">Nome</label>
          <input {...register('name', { required: true, minLength:2, maxLength:20 })}
            placeholder="Nome"
            className="w-[500px] p-2 text-black" />
            {errors.name?.type === "required" && <p className="text-red-400">"Campo obrigatório"</p>}
            {errors.name?.type === "minLength" && <p className="text-red-400">"Nome no minimo com duas letras"</p>}
          */}

          <Input
            control={control}
            name="Sobrenome"
            rules={{ required: true, minLength: 2, maxLength: 50 }}
          />

          {/*
          <label htmlFor="lastName">Sobrenome</label>
          <input {...register('lastName', { required: true, minLength: 2, maxLength: 50 })}
            placeholder="Sobrenome"
            className="w-[500px] p-2 text-black" />
          {errors.lastName?.type === "required" && <p className="text-red-400">"Campo obrigatório"</p>}
          {errors.lastName?.type === "minLength" && <p className="text-red-400">"Nome no minimo com duas letras"</p>}
          */}

          <Input
            control={control}
            name="Idade"
            rules={{  required: '"Informe sua idade"', min: 18, max: 50 , } }
          />


          {/*
          <label htmlFor="idade">Idade</label>
          <input {...register('idade', { required: '"Informe sua idade"', min: 18, max: 50 })}
            type="number"
            placeholder="Idade"
            className="w-[80px] p-2 text-black" />
          {errors.idade && <p className="text-red-400">{errors.idade?.message}</p>}
          {errors.idade?.type === "min" && <p className="text-red-400">"Idade minima 18 anos"</p>}

          */}

          <input type="submit"
            value="Enviar"
            className="border  border-gray-500 p-2 bg-green-700 font-bold cursor-pointer rounded-sm" />

        </form>
      </div>

      <FormPostAPI/>
      <ZodHookForm/>
  
    </div>



  )
};

export default Page;

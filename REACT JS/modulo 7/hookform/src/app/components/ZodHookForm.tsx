"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from 'zod'

export const ZodHookForm = () => {
    //npm i zod
    //npm i @hookform/resolvers
    /*
    type SignUpsFormZod = {
        NomeZod: string; // required, minLength: 2, maxLength: 30
        SobrenomeZod: string; // required, minLength: 2, maxLength: 30
        IdadeZod: number; // required, min:18
      
      }
   
    type SingUpObj = z.infer<typeof SignUpsFormZod>
    
    const obj: SingUpObj = {

        NomeZod: 'Korvo',
        SobrenomeZod: 'Tuirow',
        IdadeZod: 39

    }
  
    SignUpsFormZod.parse({
       NomeZod: 'Korvo',
       SobrenomeZod:'Tuirow',
       IdadeZod: 39
       
    });
    */
    const SignUpsFormZod = z.object({
        NomeZod: z.string().min(2).max(30),
        SobrenomeZod: z.string().min(2).optional(),
        IdadeZod: z.number().min(18)
    });

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(SignUpsFormZod)
    });
   
    const handleSubmitForm = () => {
        alert("Ok")
    }

    return (
        <div className="container flex flex-col justify-center mx-auto bg-[#78dff1] h-[500px] border border-white mt-5 ">

            <h1 className="flex justify-center text-2xl text-black">Zod
            </h1>

            <form onSubmit={handleSubmit(handleSubmitForm)}
                className="flex flex-col justify-center items-center gap-4 border border-black mx-auto p-5 rounded-md mt-10 bg-white/50">

                <input
                    {...register('NomeZod')}
                    placeholder="Nome"
                    className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />

                <input
                    {...register('SobrenomeZod')}
                    placeholder="Sobrenome"
                    className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />

                <input
                    {...register('IdadeZod', {valueAsNumber: true})}
                    placeholder="Idade"
                    className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />

                <input type="submit" value="Enviar"
                    className="p-3 bg-green-500 font-bold rounded-md border border-black cursor-pointer" />
            </form>

        </div>
    )
}
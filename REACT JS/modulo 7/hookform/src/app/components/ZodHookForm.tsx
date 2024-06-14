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
    const SignUpsFormZod = z.object({ //pode colocar em arquivo separado
        NomeZod: z.string().min(2, {message: "Precisa no mínimo duas letras"}).max(30),
        SobrenomeZod: z.string().min(2, {message: "Precisa no mínimo duas letras"}).optional(),
        IdadeZod: z.number({invalid_type_error: "Idade precisa ser com números"}).min(18,{message: "Idade minima de 18 anos"})
    });//

    const { register, handleSubmit, formState:{errors} } = useForm({
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

                <div>
                    <input
                        {...register('NomeZod')}
                        placeholder="Nome"
                        className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />
                        {errors.NomeZod && <p>{errors.NomeZod.message as string}</p>}
                    
                </div>    

                <div>
                    <input
                        {...register('SobrenomeZod')}
                        placeholder="Sobrenome"
                        className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />
                        {errors.SobrenomeZod && <p>{errors.SobrenomeZod.message as string}</p>}
                </div>

                <div>
                    <input
                        {...register('IdadeZod', {valueAsNumber: true})}
                        placeholder="Idade"
                        className="border border-blue-950 p-3 text-black w-[500px] rounded-md" />
                        {errors.IdadeZod && <p>{errors.IdadeZod.message as string}</p>}
                </div>

                <input type="submit" value="Enviar"
                    className="p-3 bg-green-500 font-bold rounded-md border border-black cursor-pointer" />
            </form>

        </div>
    )
}
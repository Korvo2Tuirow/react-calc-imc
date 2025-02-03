"use client"

import { receberDados } from "@/app/actions/receber-dados"
import { useFormState, useFormStatus } from "react-dom"


const initialState = {
  msg: ''
}
export const Form = () => {

  const [state, formAction] = useFormState(receberDados, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col justify-center items-center gap-3 shadow-custom bg-slate-700 border shadow-black p-5">
      
      <h1>SERVER ACTIONS</h1>

      <form action={formAction} className="flex flex-col gap-5 w-3/4  items-center">
      
        <input type="text" name="name" placeholder="Digite seu nome" className="p-2 text-black rounded-md lg:w-3/4 sm:w-full  shadow-black shadow-md" />
        <input type="number" name="age" placeholder="Digite sau idade" className="p-2 text-black rounded-md w-30 shadow-black shadow-md" />
        <input type="submit" disabled={pending} value="Enviar" className="bg-green-700 w-1/4  min-w-16 p-2 rounded-md border shadow-black shadow-md hover:scale-105" />
        <p>{state.msg}</p>

      </form>
    </div>
  )
}
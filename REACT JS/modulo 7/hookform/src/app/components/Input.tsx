import { SignUpsForm } from "@/types/SignUpForm";
import { UseControllerProps, useController } from "react-hook-form";

export const Input = (props: UseControllerProps<SignUpsForm>) =>{
    
    const{ field, fieldState } = useController(props);

    return(
        <div>
            <input {...field}
            placeholder={props.name} 
            className={`w-[500px] p-2 text-black ${fieldState.invalid ? 'border-red' : 'border-white'} `}
            />
            {fieldState.error?.type === 'required' && <p>Campo Obrigatório</p>}
            {fieldState.error?.type === 'max' && <p>Valor maximo exigido</p>}
            {fieldState.error?.type === 'min' && <p>Valor mínino exigido</p>}
        </div>
    );
}
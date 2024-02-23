import { KeyboardEvent, useState } from "react"
import { useChat } from "./ChatContext"

type Props={
    name:string;
}

export const ChatInput = ({name}:Props)=>{

    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(event.code.toLowerCase() === 'enter'){
            if(textInput.trim() !== ''){
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
    }};

    return(
       <input type="text" 
       placeholder={`${name} digite uma mensagem e aperte Enter`}
       className="w-full text-black p-3 rounded-md"
       value={textInput}
        onChange={e=>setTextInput(e.target.value)}
        onKeyUp={handleKeyUpAction}
       />
        
    )
}
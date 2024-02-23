import { useChat } from "./ChatContext"
import { userUser } from "./UserContext";

export const ChatMessenges =()=>{
    
    const chatCtx = useChat();
    const userCtx = userUser();


    
    
    return(
        <div className="flex flex-col gap-1">

            {chatCtx?.chat.map(item=>(
                <div
                    key={item.id}
                    className={`border border-black/30 rounded-md p-2 ${item.user === userCtx?.user ? 'self-end bg-green-200 text-right' : 'self-start bg-amber-100 text-left'}`}
                    >

                    <div className="font-bold">{item.user}</div>
                    <p>{item.text}</p>

                </div>
            ))           }


        </div>
    )
}
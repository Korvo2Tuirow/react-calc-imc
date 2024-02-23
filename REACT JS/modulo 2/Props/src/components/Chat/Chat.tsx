import { ChatInput } from "./ChatInput";
import { NameInput } from "./NameInput";
import { userUser } from "./UserContext"

export const Chat = () => {

    const UserCtx = userUser();

    if (!UserCtx) return null;
    if (!UserCtx?.user) return <NameInput />;

    return (

        <div className="flex flex-col justify-center items-center bg-gradient-to-t from-green-500 to-white h-screen text-black">
            <h1 className="text-center text-3xl font-bold mb-5">Chat</h1>
            <div className="container border border-black min-h-[500px] max-w-[600px] rounded-md backdrop-blur-sm bg-white/10 p-5 overflow-x-auto">

           
            </div>
            <div className="container max-w-[600px] rounded-md mt-3">
                <ChatInput name={UserCtx.user}/>
            </div>

            <div className="container max-w-[600px] rounded-md mt-3">
                <ChatInput name={'Bot'}/>
            </div>

        </div>

    )

}


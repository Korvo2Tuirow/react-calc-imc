import { KeyboardEvent, useState } from "react"
import { userUser } from "./UserContext";

export const NameInput = () => {

    const userCtx = userUser();
    const [nameInput, setNameInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
            if (nameInput.trim() !== '' && nameInput !== 'bot') {

                userCtx?.setUser(nameInput.trim());

            }
        }
    }


    return (
        <div className="mt-14 flex flex-col justify-center items-center bg-gradient-to-t from-green-500 to-white h-screen text-black">
            <p className=" text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">

                <input type="text" className="flex-1 border border-white/30 rounded-md px-4 py-3 text-black outline-none"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}

                />
            </div>
        </div>
    )
}
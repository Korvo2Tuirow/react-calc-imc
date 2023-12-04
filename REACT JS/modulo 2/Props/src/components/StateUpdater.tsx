import { useState } from "react";

export const StateUpdate = () =>{

const [num, setNum] = useState(0);

const somarNum = () =>{
setNum (num + 2);
setNum(e => e + 4)
}
return(
    <div className="flex flex-col bg-amber-950 pt-10 pb-10 items-center justify-center">
    <p className="font-bold mb-5 text-[50px]">{num}</p>
    <button onClick={somarNum} className="p-3 bg-teal-700 rounded-md shadow-[5px_5px_5px_#111]">+6</button>
    </div>
)

}
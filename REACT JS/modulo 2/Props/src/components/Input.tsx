import {useState} from 'react';

export const Input =  () => {

    const [nameInput, setNameInput] = useState('');

    const clickMostrar = () =>{
        alert(nameInput)
            }


return(

<div className=" flex flex-col justify-center items-center m-10 bg-zinc-400 p-20">
    
    <input type="text"  
    onChange={e =>setNameInput(e.target.value)} 
    className="m-10 text-black" 
    value={nameInput}
    />
    
    <p className='text-black font-bold'>{nameInput}</p>
    
    <button onClick={clickMostrar} className="p-3 bg-lime-500 text-black font-bold rounded-sm">Mostar valor</button>

</div>
)




}
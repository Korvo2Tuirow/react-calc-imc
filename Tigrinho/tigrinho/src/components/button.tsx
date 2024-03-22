import { randomInt } from "crypto";
import { useState } from "react";

export const Button = ()=>{

    let style="m-10 border border-black p-3 rounded-md font-bold text-white bg-green-600 cursor-pointer";

     

    const [numRandom, setNumRandom] = useState([0]);

          
    


    const teste=()=>{
       //alert('test');

       const num = Math.floor(Math.random() * 10+1);
       console.log(num);

       setNumRandom([ ...numRandom, num ]);
       console.log(numRandom);
      
       }

       
        
    

    return(
        <>
        <button className={style} onClick={teste}>Click me</button>
        </>
    )
    }
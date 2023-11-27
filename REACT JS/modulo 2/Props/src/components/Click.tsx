"use client"

export const Click = () =>{
    
    const click = () => {
            alert ("Funcionou");
    }
    
    return (
        
        <div  className='container flex justify-center items-center mx-auto pb-20'>
          <button className=' p-3 bg-blue-600 text-white rounded-md ' onClick={click}>CLIQUE AQUI</button>
        </div>
   
   )

}
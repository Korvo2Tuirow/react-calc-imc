
import { useContagem } from "./reducersHook";


export const ReducerApp = () =>{    

  const [contagem, contagemDispatch] = useContagem();

    return (
   
        
        <div className="flex flex-col items-start p-3 mt-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md border border-white">
          <h1 className="flex w-full justify-center text-center">REDUCER</h1>
          
          <p>Contagem : {contagem.count}</p>

          <div className="flex gap-3 mt-3">

            <button className="bg-green-500 p-2 rounded-md" 
                    onClick={() => contagemDispatch({ type: 'Add' })}>
                    Adicionar
            </button>

            <button
                    className="bg-red-700 p-2 rounded-md"
                    onClick={() => contagemDispatch({ type: 'Del' })}>
                    Subtrair
            </button>

            <button 
                    className="bg-blue-700 p-2 rounded-md"
                    onClick={() => contagemDispatch({ type: 'Reset' })}>
                    Reset
            </button>

          </div>
        </div>
        
      
        
        
    
    );
}


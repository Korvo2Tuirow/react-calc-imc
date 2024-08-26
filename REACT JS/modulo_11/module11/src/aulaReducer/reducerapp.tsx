
import { useReducer } from "react";


type reducerState = {
    count: number;
}

type reducerAction = {
    type: string;
   
}

export const ReducerApp = () =>{

    const initialState = {count: 0};

    const reducer = (state: reducerState, action: reducerAction) =>{
        
        switch(action.type){

            case "Add":
              return {...state, count: state.count +1};
            break;

            case "Del":
              if(state.count > 0){
              return {...state, count: state.count -1};
              }
            break;

            case "Reset":
              return initialState;
            break;
        }
        return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
   
        
        <div className="flex flex-col items-start p-3 mt-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-md border border-white">
          <h1 className="flex w-full justify-center text-center">REDUCER</h1>
          
          <p>Contagem : {state.count}</p>

          <div className="flex gap-3 mt-3">

            <button className="bg-green-500 p-2 rounded-md" 
                    onClick={() => dispatch({ type: 'Add' })}>
                    Adicionar
            </button>

            <button
                    className="bg-red-700 p-2 rounded-md"
                    onClick={() => dispatch({ type: 'Del' })}>
                    Subtrair
            </button>

            <button 
                    className="bg-blue-700 p-2 rounded-md"
                    onClick={() => dispatch({ type: 'Reset' })}>
                    Reset
            </button>

          </div>
        </div>
        
      
        
        
    
    );
}


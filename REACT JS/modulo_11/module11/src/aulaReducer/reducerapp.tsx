
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
   
        
        <div className="flex flex-col w-full bg-green-200 mt-5">
          
          <p>Contagem : {state.count}</p>
          <button className="bg-blue-400" onClick={() => dispatch({ type: 'Add' })}>Adicionar</button>
          <button onClick={() => dispatch({ type: 'Del' })}>Subtrair</button>
          <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
        </div>
        
      
        
        
    
    );
}


import { useReducer } from "react";
type reducerState = {
  count: number;
};

type reducerAction = {
  type: string;
};

const initialState = { count: 0 };

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "Add":
      return { ...state, count: state.count + 1 };
      break;

    case "Del":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;

    case "Reset":
      return initialState;
      break;
  }
  return state;
};

export const useContagem = () => {
  return useReducer(reducer, initialState);
};

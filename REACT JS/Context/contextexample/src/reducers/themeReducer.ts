
import {reducerActionType} from "../types/reducerActionType"

export type themeType = {
    status: "dark" | "light",
};

export const themeInitialState: themeType = {
    status: "light"
};

export const themeReducer = (state: themeType, action: reducerActionType )=>{

    switch(action.type){
        case'CHANGE_STATUS':
            return{...state, status: action.payload.status};
        // eslint-disable-next-line no-unreachable
        break;
    }

    return state;
}
import React, { createContext, useReducer } from 'react';
import { userType, userInitialState, userReducer } from '../reducers/useReducer';
import { reducerActionType } from '../types/reducerActionType';
import { themeType, themeInitialState, themeReducer} from "../reducers/themeReducer"

type initialStateType = {
    user: userType,
    theme: themeType
}

type contextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});

type Props = {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

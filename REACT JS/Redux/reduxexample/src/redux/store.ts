import { configureStore } from '@reduxjs/toolkit';

import  userReducer from './reducers/userReducer';

//recomendado uma store por aplicação

export const store = configureStore({
    reducer:{
        user: userReducer,
    }
        
});

export type RootState = ReturnType<typeof store.getState>;
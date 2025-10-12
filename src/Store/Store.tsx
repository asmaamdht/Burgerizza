import { configureStore } from "@reduxjs/toolkit";

import CartReducer from '../Store/CartSlice';
import MenuReducer from './MenuSlice';

import userReducer from '../Store/CartSlice';
import resetReducer from '../Store/Userslice';



export const store = configureStore({
    reducer: {
        cart: CartReducer,
        menu: MenuReducer,
        user: userReducer,
        resetuser: resetReducer,
    },
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
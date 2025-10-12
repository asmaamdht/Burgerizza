import { configureStore } from "@reduxjs/toolkit";

import CartReducer from './CartSlice';
import MenuReducer from './MenuSlice';

import userReducer from './CartSlice';
import resetReducer from './Userslice';



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
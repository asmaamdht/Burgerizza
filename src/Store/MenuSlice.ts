import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Menu } from "../types"
import axios from "axios";

type MenuState = {
    menuData:Menu[];
    loading: boolean;
    error: string | null;
}

const initialState: MenuState = {
    menuData:[],
    loading: false,
    error: null,
};

    // get data from API 
    
    export const getAllMenuData =createAsyncThunk("getAllMenuData",async ()=> {
        const menuData = await axios.get<Menu[]>("https://68e3e5f38e116898997a5f72.mockapi.io/items");
        const allMenuData = menuData.data.map(item => ({
            id: Number(item.id),        
            name: item.name,
            description: item.description,    
            price: item.price,
            image: item.image,
            category: item.category
        }));

        return allMenuData;                
    })


    const MenuSlice=createSlice({
        name: 'menu',
        initialState,
        reducers: {},
        extraReducers:builder => {
        builder
            .addCase(getAllMenuData.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllMenuData.fulfilled, (state, action) => {
                state.loading = false;
                state.menuData= action.payload;
            })
            .addCase(getAllMenuData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Unknown error';
        });
        }
    })



    export default MenuSlice.reducer;



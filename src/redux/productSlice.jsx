import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

const initialState = {
    items:[],
    loading:false,
    error:null,
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    
    },
    extraReducers:{
        
    }
});
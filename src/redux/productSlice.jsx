import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category) => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        return { category, products: response.data };
    }
);

const initialState = {
    items:[],
    loading:false,
    error:null,
}

const productSlice = createSlice({
    name:'products',
    initialState,

    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items[action.payload.category] = action.payload.products;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice;

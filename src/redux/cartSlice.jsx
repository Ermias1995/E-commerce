import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch cart data if needed in the future
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const response = await fetch('https://fakestoreapi.com/carts');
    return response.json();
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Increment quantity if item exists
            } else {
                state.items.push(action.payload); // Add new item
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.productId !== action.payload); // Remove item
        },
        clearCart(state) {
            state.items = []; // Clear the cart
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true; // Set loading state
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false; // Loading finished
                state.items = action.payload; // Set items from fetched data
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false; // Loading finished
                state.error = action.error.message; // Set error message
            });
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;
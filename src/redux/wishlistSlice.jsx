import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload); // Add only if not already in wishlist
            }
        },
        removeFromWishlist(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload); // Remove item
        },
        clearWishlist(state) {
            state.items = []; // Clear the wishlist
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice;
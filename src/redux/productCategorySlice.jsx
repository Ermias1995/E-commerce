import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: null,
};

const productCategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setSelectedCategory } = productCategorySlice.actions;
export default productCategorySlice;
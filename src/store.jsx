import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";
import categoriesSlice from "./redux/categorySlice";
import productCategorySlice from './redux/productCategorySlice';
import cartSlice from "./redux/cartSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        products: productSlice.reducer,
        categories: categoriesSlice.reducer,
        category: productCategorySlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;

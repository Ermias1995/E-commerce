import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";
import categoriesSlice from "./redux/categorySlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        products: productSlice.reducer,
        categories: categoriesSlice.reducer,
    }
});

export default store;

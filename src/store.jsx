import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        products: productSlice.reducer
    }
});

export default store;
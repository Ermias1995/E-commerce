import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";
import categoriesSlice from "./redux/categorySlice";
import productCategorySlice from './redux/productCategorySlice';
import cartSlice from "./redux/cartSlice";
import wishlistSlice from "./redux/wishlistSlice";


const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        products: productSlice.reducer,
        categories: categoriesSlice.reducer,
        category: productCategorySlice.reducer,
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
    }
});

export default store;

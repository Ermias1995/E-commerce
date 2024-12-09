import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLoggeIn: false,
        user: null,
        error: null,
    },
    reducers:{
        login:(state, action)=>{
            state.isLoggeIn = true;
            state.user = action.payload;
            state.error = null;
        },
        logout:(state)=>{
            state.isLoggeIn = false;
            state.user = null;
        },
        setError:(state, action)=>{
            state.error = action.payload;
        }
    },
});

export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice;
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLoggeIn: false
    },
    reducers:{
        login:(state)=>{
            state.isLoggeIn = true;
        },
        logout:(state)=>{
            state.isLoggeIn = false;
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
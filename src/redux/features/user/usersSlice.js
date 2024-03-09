import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "Md Asik",
    email: "asik@gmail.com",
};

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {},
    
    
});

export default usersSlice.reducer;

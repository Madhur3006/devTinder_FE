import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        info: null
    },
    reducers: {
        addUser: (state, action) => {
            state.isLoggedIn = true
            state.info = action.payload 
        },
        removeUser: (state, action) => {
            state.isLoggedIn = false 
            state.info = null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            if (!state || !state.data) return state;
            const newData = state.data.filter((user) => user._id !== action.payload);
            return {
                ...state,
                data: newData
            };
        },
    }
})

export const {addFeed, removeUser} = feedSlice.actions

export default feedSlice.reducer
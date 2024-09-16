// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address: '',
    isConnected: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        connect: (state, action) => {
            state.address = action.payload;
            state.isConnected = true;
        },
        disconnect: (state) => {
            state.address = '';
            state.isConnected = false;
        },
    },
});

export const { connect, disconnect } = userSlice.actions;
export default userSlice.reducer;

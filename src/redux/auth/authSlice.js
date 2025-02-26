import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onCheckingStatus: (state, /* { payload } */) => {
            state.status = 'checking',
            state.user = {};
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated',
            state.user = payload;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated',
            state.user = {};
            state.errorMessage = payload;
        },
        onClearErrorMessage: (state, /* { payload } */) => {
            state.errorMessage = undefined;
        },
    }
});

export const {
    onCheckingStatus,
    onLogin,
    onLogout,
    onClearErrorMessage,
} = authSlice.actions;
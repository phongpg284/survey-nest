import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken: string;
    refreshToken: string;
    // role: string;
    username: string;
    id: string;
}

const initialState: Partial<AuthState> = {
    accessToken: "",
    refreshToken: "",
    // role: "",
    username: "",
    id: "",
};

export const authSlice = createSlice({
    name: "authenticate",
    initialState,
    reducers: {
        updateToken: (state: any, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.username = action.payload.username;
            // state.role = action.payload.role;
            state.id = action.payload.id;
        },
    },
});

export const { updateToken } = authSlice.actions;
export default authSlice.reducer;

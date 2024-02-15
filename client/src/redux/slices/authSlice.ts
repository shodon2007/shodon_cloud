import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthForm {
    login: string,
    password: string,
}

export interface AuthSlice {
    isAuth: boolean,
    token: string,
}

const initialState: AuthSlice = {
    isAuth: !!localStorage.getItem('isAuth'),
    token: localStorage.getItem('token') ?? '',
}

const slice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        auth(state, action: PayloadAction<AuthForm>) {
            console.log(state);
            console.log(action);
        },

        exit(state) {
            console.log(state);
            localStorage.clear();
        }
    }
})

export const { auth, exit } = slice.actions

export default slice.reducer;
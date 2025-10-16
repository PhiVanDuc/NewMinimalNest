import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
    [key: string]: boolean
}

const initialState: initialStateType = {}

const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        open: (state, action: PayloadAction<string>) => {
            state[action.payload] = true;
        },
        close: (state, action: PayloadAction<string>) => {
            state[action.payload] = false;
        }
    }
});

export default drawerSlice;
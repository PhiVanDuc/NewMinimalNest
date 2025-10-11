import { createSlice } from "@reduxjs/toolkit";

const navbarSidebarSlice = createSlice({
    name: "navbarSidebar",
    initialState: {
        isOpen: false
    },
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export default navbarSidebarSlice;
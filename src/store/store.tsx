import { configureStore } from "@reduxjs/toolkit";

import navbarSidebarSlice from "./slices/navbarSidebarSlice";

const store = configureStore({
    reducer: {
        navbarSidebar: navbarSidebarSlice.reducer
    }
});

export default store;
export type ReduxStateType = ReturnType<typeof store.getState>;
export type ReduxDispatchType = typeof store.dispatch;
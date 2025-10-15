import { configureStore } from "@reduxjs/toolkit";

import drawerSlice from "./slices/drawerSlice";

const store = configureStore({
    reducer: {
        drawer: drawerSlice.reducer,
    }
});

export default store;
export type ReduxStateType = ReturnType<typeof store.getState>;
export type ReduxDispatchType = typeof store.dispatch;
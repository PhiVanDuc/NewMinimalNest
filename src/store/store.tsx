import { configureStore } from "@reduxjs/toolkit";

import drawerSlice from "./slices/drawerSlice";
import filterProductSlice from "./slices/filterProduct";

const store = configureStore({
    reducer: {
        drawer: drawerSlice.reducer,
        filterProduct: filterProductSlice.reducer
    }
});

export default store;
export type ReduxStateType = ReturnType<typeof store.getState>;
export type ReduxDispatchType = typeof store.dispatch;
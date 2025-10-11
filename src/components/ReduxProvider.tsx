"use client"

import store from "@/store/store";
import { Provider } from "react-redux";

interface PropsType {
    children: React.ReactNode;
}

export default function ReduxProvider({ children }: Readonly<PropsType>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProductType {
    id: string,
    name: string,
    thumb: string,
    color: string,
    price: number,
    quantity: number
}

const initialState: CartProductType[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartProductType>) => {
            const product = action.payload;
            const existing = state.find(
                (item) => item.id === product.id && item.color === product.color
            );

            if (existing) existing.quantity += product.quantity;
            else state.push(product);
        },
        delete: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        }
    }
});

export default cartSlice;
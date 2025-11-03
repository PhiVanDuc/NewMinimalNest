import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface itemType {
    id: string,
    label: string,
    value: string
}

interface colorType extends itemType {
    color: string
}

interface priceRangeType extends itemType {
    min: number,
    max: number
}

interface initialStateType {
    productName: string,
    categories: itemType[],
    statuses: itemType[],
    colors: colorType[],
    priceRange: priceRangeType | null
}

const initialState: initialStateType = {
    productName: "",
    categories: [],
    statuses: [],
    colors: [],
    priceRange: null
};

const filterProductSlice = createSlice({
    name: "filterProduct",
    initialState,
    reducers: {
        setProductName: (state, action: PayloadAction<string>) => {
            state.productName = action.payload;
        },
        setCategories: (state, action: PayloadAction<itemType[]>) => {
            state.categories = action.payload;
        },
        setStatuses: (state, action: PayloadAction<itemType[]>) => {
            state.statuses = action.payload;
        },
        setColors: (state, action: PayloadAction<colorType[]>) => {
            state.colors = action.payload;
        },
        setPriceRange: (state, action: PayloadAction<priceRangeType>) => {
            if (state.priceRange?.id === action.payload.id) state.priceRange = null;
            else state.priceRange = action.payload;
        },
        toggleCategory: (state, action: PayloadAction<itemType>) => {
            const index = state.categories.findIndex(
                category => category.value === action.payload.value
            );

            if (index === -1) state.categories.push(action.payload);
            else state.categories.splice(index, 1);
        },
        toggleStatus: (state, action: PayloadAction<itemType>) => {
            const index = state.statuses.findIndex(
                status => status.value === action.payload.value
            );

            if (index === -1) state.statuses.push(action.payload);
            else state.statuses.splice(index, 1);
        },
        toggleColor: (state, action: PayloadAction<colorType>) => {
            const index = state.colors.findIndex(
                color => color.value === action.payload.value
            );

            if (index === -1) state.colors.push(action.payload);
            else state.colors.splice(index, 1);
        }
    }
});

export default filterProductSlice;
export type { itemType, colorType, priceRangeType }
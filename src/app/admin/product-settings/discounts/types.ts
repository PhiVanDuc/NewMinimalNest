export interface DiscountDataType {
    name: string
}

export interface DiscountFormDataType {
    name: string,
    discountType: string,
    discount: string,
    products: number[]
}

export interface DiscountFilterType {
    name: string,
    categories: {
        name: string,
        slug: string
    }[]
}
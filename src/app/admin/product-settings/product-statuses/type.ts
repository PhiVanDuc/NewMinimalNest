export interface ProductStatusFormDataType {
    name: string,
    products: number[]
}

export interface ProductStatusFilterType {
    name: string,
    categories: {
        name: string,
        slug: string
    }[]
}
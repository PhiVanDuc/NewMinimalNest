export interface ProductGroupDataType {
    name: string
}

export interface ProductGroupFormDataType {
    name: string,
    products: number[]
}

export interface ProductGroupFilterType {
    name: string,
    categories: {
        name: string,
        slug: string
    }[]
}
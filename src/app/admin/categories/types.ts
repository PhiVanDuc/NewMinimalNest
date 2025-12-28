export interface CategoryDataType {
    id: string,
    name: string
}

export interface CategoriesDataType {
    categories: CategoryDataType[],
    page: string,
    totalPage: string,
}

export interface CategoryFilterDataType {
    name: string
}

export interface CategoryFormDataType {
    name: string
}
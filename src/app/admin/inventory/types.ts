export interface InventoryFormDataType {
    name: string,
    totalQuantity: string
}

export interface TemplateExcelFormDataType {
    products: number[]
}

export interface TemplateExcelFilterType {
    name: string,
    categories: {
        name: string,
        slug: string
    }[]
}
export interface ColorDataType {
    id: string,
    name: string,
    slug: string
    color_code: string,
    created_at: Date,
    updated_at: Date
}

export interface ColorsDataType {
    colors: ColorDataType[],
    page: string,
    totalPage: string,
}

export interface ColorsFilterDataType {
    name: string
}

export interface ColorFormDataType {
    name: string,
    colorCode: string
}
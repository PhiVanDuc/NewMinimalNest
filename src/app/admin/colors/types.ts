export interface ColorDataType {
    id: string,
    name: string
    color_code: string
}

export interface ColorsDataType {
    colors: ColorDataType[],
    page: string,
    totalPage: string,
}

export interface ColorFilterDataType {
    name: string
}

export interface ColorFormDataType {
    name: string,
    colorCode: string
}
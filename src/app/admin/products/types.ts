import type { CategoryDataType } from "@/app/admin/categories/types";
import type { ColorDataType } from "@/app/admin/colors/types";

export interface ProductDataType {
    name: string
}

export interface ProductsDataType {
    products: ProductDataType[],
    page: string,
    totalPage: string
}

export interface ProductFilterDataType {
    name: string
}

export type ProductImageRoleType = "main" | "sub" | "normal";

export interface ProductFormDataType {
    name: string,
    desc: string,
    costPrice: string,
    interestPercent: string,
    discountType: string,
    discount: string,
    price: string,
    categories: CategoryDataType[],
    colors: ColorDataType[],
    color?: ColorDataType,
    images: {
        colorId: string,
        role: ProductImageRoleType,
        image: File | string,
        preview?: string
    }[]
}
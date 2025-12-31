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

export interface ProductFormDataType {
    name: string,
    desc: string,
    costPrice: string,
    interestPercent: string,
    discountType: string,
    discount: string,
    price: string,
    categories: { name: string, slug: string }[],
    colors: { name: string, slug: string, colorCode: string }[],
    color?: { name: string, slug: string, colorCode: string },
    images: {
        colorSlug: string;
        type: "main" | "sub" | "normal";
        image: File | string;
    }[]
}
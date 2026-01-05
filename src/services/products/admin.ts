"use client"

import privateFetch from "@/libs/fetch/private-fetch";

export interface AdminAddProductData {
    name: string,
    desc: string,
    costPrice: number,
    interestPercent: number,
    discountType: DiscountType,
    discount: number,
    price: number,
    categories: Category[],
    colors: Color[],
}

export const adminAddProduct = async (data: AdminAddProductData) => {
    return privateFetch.post("/admin/products", data);
}
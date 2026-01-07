"use client"

import privateFetch from "@/libs/fetch/private-fetch";

interface AdminAddProductInput {
    name: string,
    desc: string,
    costPrice: number,
    interestPercent: number,
    discountType: DiscountType,
    discount: number,
    categories: Category[],
    colors: Color[],
}

interface AdminAddProducOutput {
    id: string
}

export const adminAddProduct = async (data: AdminAddProductInput) => {
    return privateFetch.post<AdminAddProductInput, AdminAddProducOutput>("/admin/products", data);
}

export const adminAddProductImages = async (id: string, formData: FormData) => {
    return privateFetch.post(`/admin/products/${id}/images`, formData);
}
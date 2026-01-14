"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toQueryString from "@/utils/to-query-string";

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

interface AdminAddProductOutput {
    id: string
}

interface AdminAddProductImagesOutput {
    statusCode: number,
    message: string
}

import type { Filter } from "@/app/admin/products/components/ProductFilter";

export const adminGetProducts = async ({ page, limit, filter }: { page?: string, limit?: string, filter?: Filter }) => {
    const queryString = toQueryString({ page, limit, ...filter });
    return privateFetch.get<ProductCards>(`/admin/products${queryString}`);
}

export const adminGetProduct = async <Id>(id: Id) => {
    return privateFetch.get<ProductDetail>(`/admin/products/${id}`);
}

export const adminAddProduct = async (data: AdminAddProductInput) => {
    return privateFetch.post<AdminAddProductInput, AdminAddProductOutput>("/admin/products", data);
}

export const adminAddProductImages = async (id: string, formData: FormData) => {
    return privateFetch.post<FormData, AdminAddProductImagesOutput[]>(`/admin/products/${id}/images`, formData);
}
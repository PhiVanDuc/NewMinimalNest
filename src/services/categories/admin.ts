"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toParams from "@/utils/to-params";

import type { CategoriesDataType, CategoryDataType } from "@/app/admin/categories/types";

export const adminGetCategories = async <PageType, FilterDataType extends Record<string, string>>(page: PageType, filter: FilterDataType) => {
    const params = toParams({ page, ...filter });
    return privateFetch.get<CategoriesDataType>(`/admin/categories?${params}`);
}

export const adminGetCategory = async <IdType>(id: IdType) => {
    return privateFetch.get<CategoryDataType>(`/admin/categories/${id}`);
}

export const adminAddCategory = async <DataType>(data: DataType) => {
    return privateFetch.post("/admin/categories", data);
}

export const adminUpdateCategory = async <IdType, DataType>(id: IdType, data: DataType) => {
    return privateFetch.put(`/admin/categories/${id}`, data);
}

export const adminDeleteCategory = async <IdType>(id: IdType) => {
    return privateFetch.delete(`/admin/categories/${id}`);
}
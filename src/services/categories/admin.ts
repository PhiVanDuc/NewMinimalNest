"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toQueryString from "@/utils/to-query-string";

import type { Filter } from "@/app/admin/categories/components/CategoryFilter";

export const adminGetCategories = async (page: string, filter: Filter) => {
    const queryString = toQueryString({ page, ...filter });
    return privateFetch.get<Categories>(`/admin/categories?${queryString}`);
}

export const adminGetCategory = async <Id>(id: Id) => {
    return privateFetch.get<Category>(`/admin/categories/${id}`);
}

export const adminAddCategory = async <Data>(data: Data) => {
    return privateFetch.post("/admin/categories", data);
}

export const adminUpdateCategory = async <Id, Data>(id: Id, data: Data) => {
    return privateFetch.put(`/admin/categories/${id}`, data);
}

export const adminDeleteCategory = async <Id>(id: Id) => {
    return privateFetch.delete(`/admin/categories/${id}`);
}
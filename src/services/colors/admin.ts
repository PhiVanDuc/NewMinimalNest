"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toParams from "@/utils/to-params";

import type { ColorsDataType, ColorDataType } from "@/app/admin/colors/types";

export const adminGetColors = async <PageType, FilterDataType extends Record<string, string>>(page: PageType, filter: FilterDataType) => {
    const params = toParams({ page, ...filter });
    return privateFetch.get<ColorsDataType>(`/admin/colors?${params}`);
}

export const adminGetColor = async <IdType>(id: IdType) => {
    return privateFetch.get<ColorDataType>(`/admin/colors/${id}`);
}

export const adminAddColor = async <DataType>(data: DataType) => {
    return privateFetch.post("/admin/colors", data);
}

export const adminUpdateColor = async <IdType, DataType>(id: IdType, data: DataType) => {
    return privateFetch.put(`/admin/colors/${id}`, data);
}

export const adminDeleteColor = async <IdType>(id: IdType) => {
    return privateFetch.delete(`/admin/colors/${id}`);
}
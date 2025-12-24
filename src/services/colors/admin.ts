"use server"

import publicFetch from "@/libs/fetch/public-fetch";
import toParams from "@/utils/to-params";

import type { ColorsDataType, ColorDataType } from "@/app/admin/colors/types";

export const adminGetColors = async <PageType, FilterDataType extends Record<string, string>>(page: PageType, filter: FilterDataType) => {
    const params = toParams({ page, ...filter });
    return publicFetch.get<ColorsDataType>(`/admin/colors?${params}`);
}

export const adminGetColor = async <IdType>(id: IdType) => {
    return publicFetch.get<ColorDataType>(`/admin/colors/${id}`);
}

export const adminAddColor = async <DataType>(data: DataType) => {
    return publicFetch.post("/admin/colors", data);
}

export const adminUpdateColor = async <IdType, DataType>(id: IdType, data: DataType) => {
    return publicFetch.put(`/admin/colors/${id}`, data);
}

export const adminDeleteColor = async <IdType>(id: IdType) => {
    return publicFetch.delete(`/admin/colors/${id}`);
}
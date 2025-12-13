"use server"

import publicFetch from "@/libs/fetch/public-fetch";
import toSearchParams from "@/utils/to-search-params";

import type { ColorDataType, ColorsDataType } from "@/app/admin/colors/types";

export const adminGetColors = async <PageType, FilterDataType extends Record<string, any>>(page: PageType, filter: FilterDataType) => {
    const searchParams = toSearchParams({
        page,
        ...filter
    });

    return publicFetch.get<ColorsDataType>(`/admin/colors?${searchParams}`);
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
"use server"

import publicFetch from "@/libs/fetch/public-fetch";

import type { ColorDataType, ColorsDataType } from "@/app/admin/colors/types";

export const adminGetColors = async <PageType>(page: PageType) => {
    return publicFetch.get<ColorsDataType>(`/colors?page=${page}`);
}

export const adminGetColor = async <IdType>(id: IdType) => {
    return publicFetch.get<ColorDataType>(`/colors/${id}`);
}

export const adminAddColor = async <DataType>(data: DataType) => {
    return publicFetch.post("/colors", data);
}

export const adminUpdateColor = async <IdType, DataType>(id: IdType, data: DataType) => {
    return publicFetch.put(`/colors/${id}`, data);
}
"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toQueryString from "@/utils/to-query-string";

import type { Filter } from "@/app/admin/colors/components/ColorFilter";

export const adminGetColors = async ({ page, limit, filter }: { page?: string, limit?: string, filter?: Filter }) => {
    const queryString = toQueryString({ page, limit, ...filter });
    return privateFetch.get<Colors>(`/admin/colors${queryString}`);
}

export const adminGetColor = async <Id>(id: Id) => {
    return privateFetch.get<Color>(`/admin/colors/${id}`);
}

export const adminAddColor = async <Data>(data: Data) => {
    return privateFetch.post("/admin/colors", data);
}

export const adminUpdateColor = async <Id, Data>(id: Id, data: Data) => {
    return privateFetch.put(`/admin/colors/${id}`, data);
}

export const adminDeleteColor = async <Id>(id: Id) => {
    return privateFetch.delete(`/admin/colors/${id}`);
}
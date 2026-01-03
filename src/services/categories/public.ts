"use client"

import publicFetch from "@/libs/fetch/public-fetch";

export const publicGetCategories = async () => {
    return publicFetch.get<Categories>("/categories?page=1&limit=100");
}
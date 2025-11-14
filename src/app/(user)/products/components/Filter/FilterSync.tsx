"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

import filterProductSlice from "@/store/slices/filterProduct";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";
import { categories, statuses, colors, priceRanges } from "@/consts/filter";

import type { itemType, colorType, priceRangeType } from "@/store/slices/filterProduct";

export default function FilterSync() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const dispatch = useDispatch();

    function setArrayAction<PayloadType extends { value: string }>(
        param: string,
        array: PayloadType[],
        action: (payload: PayloadType[]) => { type: string; payload: PayloadType[] }
    ): PayloadType[] {
        const slugs = searchParams.get(param)?.split(",");
        let payload: PayloadType[] = [];

        if (slugs) {
            payload = array.filter(item => slugs.includes(item.value));
            dispatch(action(payload));
        }

        return payload;
    }

    useEffect(() => {
        const tempSlugs:
            {
                page: string,
                productName: string,
                categories: itemType[],
                statuses: itemType[],
                colors: colorType[],
                priceRange: priceRangeType | null
            } = {
            page: "",
            productName: "",
            categories: [],
            statuses: [],
            colors: [],
            priceRange: null
        }

        const page = searchParams.get("page");
        if (page && isPositiveIntegerString(page)) tempSlugs.page = page;

        const productName = searchParams.get("productName");
        if (productName) {
            tempSlugs.productName = productName;
            dispatch(
                filterProductSlice.actions.setProductName(productName)
            );
        }

        const priceRangeSlug = searchParams.get("priceRange");
        if (priceRangeSlug) {
            const payload = priceRanges.find(priceRange => priceRange.value === priceRangeSlug);
            if (payload) {
                tempSlugs.priceRange = payload;
                dispatch(filterProductSlice.actions.setPriceRange(payload));
            }
        }

        tempSlugs.categories = setArrayAction<itemType>("categories", categories, filterProductSlice.actions.setCategories);
        tempSlugs.statuses = setArrayAction<itemType>("statuses", statuses, filterProductSlice.actions.setStatuses);
        tempSlugs.colors = setArrayAction<colorType>("colors", colors, filterProductSlice.actions.setColors);

        const params = new URLSearchParams();

        if (tempSlugs.page) params.set("page", tempSlugs.page);
        if (tempSlugs.productName) params.set("productName", tempSlugs.productName);
        if (tempSlugs.categories.length) params.set("categories", tempSlugs.categories.map(category => category.value).join(","));
        if (tempSlugs.statuses.length) params.set("statuses", tempSlugs.statuses.map(status => status.value).join(","));
        if (tempSlugs.colors.length) params.set("colors", tempSlugs.colors.map(color => color.value).join(","));
        if (tempSlugs.priceRange && "value" in tempSlugs.priceRange) params.set("priceRange", tempSlugs.priceRange.value);

        let query = params.toString();
        query = query.replace(/%2C/g, ",");

        router.replace(`?${query}`);
    }, []);

    return null;
}
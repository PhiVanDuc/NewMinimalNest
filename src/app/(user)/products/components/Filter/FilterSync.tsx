"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

import filterProductSlice from "@/store/slices/filterProduct";
import { categories, statuses, colors, priceRanges } from "@/consts/filter";

import type { ReduxStateType } from "@/store/store";
import type { itemType, colorType } from "@/store/slices/filterProduct";

export default function FilterSync() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const dispatch = useDispatch();
    const filter = useSelector((state: ReduxStateType) => state.filterProduct);

    function setArrayAction<PayloadType extends { slug: string }>(
        param: string,
        array: PayloadType[],
        action: (payload: PayloadType[]) => { type: string; payload: PayloadType[] }
    ): void {
        const slugs = searchParams.get(param)?.split(",");

        if (slugs) {
            const payload = array.filter(item => slugs.includes(item.slug));
            dispatch(action(payload));
        }
    }

    useEffect(() => {
        const productName = searchParams.get("productName");
        if (productName) {
            dispatch(
                filterProductSlice.actions.setProductName(productName)
            );
        }

        const priceRangeSlug = searchParams.get("priceRange");
        if (priceRangeSlug) {
            const payload = priceRanges.find(priceRange => priceRange.slug === priceRangeSlug);
            if (payload) dispatch(filterProductSlice.actions.setPriceRange(payload));
        }

        setArrayAction<itemType>("categories", categories, filterProductSlice.actions.setCategories);
        setArrayAction<itemType>("statuses", statuses, filterProductSlice.actions.setStatuses);
        setArrayAction<colorType>("colors", colors, filterProductSlice.actions.setColors);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();

        if (filter.productName) params.set("productName", filter.productName);
        if (filter.categories.length) params.set("categories", filter.categories.map(category => category.slug).join(","));
        if (filter.statuses.length) params.set("statuses", filter.statuses.map(status => status.slug).join(","));
        if (filter.colors.length) params.set("colors", filter.colors.map(color => color.slug).join(","));
        if (filter.priceRange && "id" in filter.priceRange) params.set("priceRange", filter.priceRange.slug);

        router.replace(`?${params.toString()}`);
    }, [filter]);

    return null;
}
"use client"

import ProductPrice from "@/app/(user)/products/[productSlug]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[productSlug]/components/ProductHeader";
import ProductOptionList from "@/app/(user)/products/[productSlug]/components/ProductOptionList";
import ProductActionButtonList from "@/app/(user)/products/[productSlug]/components/ProductActionButtonList";
import ProductDetailInfo from "@/app/(user)/products/[productSlug]/components/ProductDetailInfo";

import { cn } from "@/lib/utils";

export default function ProductInfo() {
    return (
        <div
            className={cn(
                "w-full space-y-[30px]",
                "xl:w-[50%]"
            )}
        >
            <ProductHeader />
            <ProductPrice />
            <ProductOptionList />
            <ProductActionButtonList />
            <ProductDetailInfo />
        </div>
    )
}
"use client"

import ProductPrice from "@/app/(user)/products/[productSlug]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[productSlug]/components/ProductHeader";
import ProductOptions from "@/app/(user)/products/[productSlug]/components/ProductOptions";
import ProductActionButtons from "@/app/(user)/products/[productSlug]/components/ProductActionButtons";
import ProductDetailInfo from "@/app/(user)/products/[productSlug]/components/ProductDetailInfo";

import { cn } from "@/libs/utils";

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
            <ProductOptions />
            <ProductActionButtons />
            <ProductDetailInfo />
        </div>
    )
}
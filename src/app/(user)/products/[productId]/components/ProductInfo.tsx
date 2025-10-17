"use client"

import ProductPrice from "@/app/(user)/products/[productId]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[productId]/components/ProductHeader";
import ProductVariant from "@/app/(user)/products/[productId]/components/ProductVariant";
import ProductButtonAction from "@/app/(user)/products/[productId]/components/ProductButtonAction";

import { cn } from "@/lib/utils";

export default function ProductInfo() {
    return (
        <section
            className={cn(
                "w-full space-y-[35px]",
                "xl:w-[50%]"
            )}
        >
            <ProductHeader />
            <ProductPrice />
            <ProductVariant />
            <ProductButtonAction />
        </section>
    )
}
"use client"

import ProductPrice from "@/app/(user)/products/[slugProduct]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[slugProduct]/components/ProductHeader";
import ProductOption from "@/app/(user)/products/[slugProduct]/components/ProductOption";
import ProductButtonAction from "@/app/(user)/products/[slugProduct]/components/ProductButtonAction";
import ProductDetailInfo from "@/app/(user)/products/[slugProduct]/components/ProductDetailInfo";

import { cn } from "@/lib/utils";

export default function ProductInfo() {
    return (
        <section
            className={cn(
                "w-full space-y-[30px]",
                "xl:w-[50%]"
            )}
        >
            <ProductHeader />
            <ProductPrice />
            <ProductOption />
            <ProductButtonAction />
            <ProductDetailInfo />
        </section>
    )
}
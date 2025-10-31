"use client"

import ProductPrice from "@/app/(user)/products/[slugProduct]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[slugProduct]/components/ProductHeader";
import ProductOptionList from "@/app/(user)/products/[slugProduct]/components/ProductOptionList";
import ProductActionButtonList from "@/app/(user)/products/[slugProduct]/components/ProductActionButtonList";
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
            <ProductOptionList />
            <ProductActionButtonList />
            <ProductDetailInfo />
        </section>
    )
}
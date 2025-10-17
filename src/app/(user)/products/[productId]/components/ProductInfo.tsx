"use client"

import ProductPrice from "@/app/(user)/products/[productId]/components/ProductPrice";
import ProductHeader from "@/app/(user)/products/[productId]/components/ProductHeader";
import ProductOption from "@/app/(user)/products/[productId]/components/ProductOption";
import ProductButtonAction from "@/app/(user)/products/[productId]/components/ProductButtonAction";
import ProductDetailInfo from "@/app/(user)/products/[productId]/components/ProductDetailInfo";

import { Separator } from "@/components/ui/separator";

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
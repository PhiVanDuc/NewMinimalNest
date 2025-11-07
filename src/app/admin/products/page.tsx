"use client"

import { Suspense } from "react";
import ProductsClient from "@/app/admin/products/components/ProductsClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <ProductsClient />
        </Suspense>
    )
}

"use client"

import { Suspense } from "react";
import ProductGroupsClient from "@/app/admin/product-settings/product-groups/components/ProductGroupsClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <ProductGroupsClient />
        </Suspense>
    )
}
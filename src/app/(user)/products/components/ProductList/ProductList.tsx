import { Suspense } from "react";
import ProductListClient from "@/app/(user)/products/components/ProductList/ProductListClient";

import { redirect } from "next/navigation";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";

interface PropsType {
    searchParams: { page?: string }
}

export default function ProductList({ searchParams }: PropsType) {
    const page = searchParams.page;
    if (page && !isPositiveIntegerString(page)) redirect("/products");

    return <Suspense fallback={null}><ProductListClient /></Suspense>
}
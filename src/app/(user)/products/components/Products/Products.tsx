import { Suspense } from "react";
import ProductsClient from "@/app/(user)/products/components/Products/ProductsClient";

import { redirect } from "next/navigation";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";

interface PropsType {
    searchParams: { page?: string }
}

export default function Products({ searchParams }: PropsType) {
    const page = searchParams.page;
    if (page && !isPositiveIntegerString(page)) redirect("/products");

    return <Suspense fallback={null}><ProductsClient /></Suspense>
}
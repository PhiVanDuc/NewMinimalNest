import ProductListClient from "./ProductListClient";

import { redirect } from "next/navigation";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

interface PropsType {
    searchParams: { page?: string }
}

export default function ProductList({ searchParams }: PropsType) {
    const page = searchParams.page;
    if (page && !positiveIntegerValidator(page)) redirect("/products");

    // Fetch data nếu cần

    return <ProductListClient />
}
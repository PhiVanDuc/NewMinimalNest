"use client"

import { useRef } from "react";
import { useSearchParams } from "next/navigation";

import Pagination from "@/components/Pagination";
import Product from "@/components/Product";

export default function ProductListClient() {
    const productListRef = useRef(null);
    const searchParams = useSearchParams();

    return (
        <section className="space-y-[40px]">
            <ul
                ref={productListRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px]"
            >
                {
                    Array.from({ length: 16 }).map((_, index) => {
                        return <li key={index}><Product /></li>
                    })
                }
            </ul>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
                listRef={productListRef}
            />
        </section>
    )
}
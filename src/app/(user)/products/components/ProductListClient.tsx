"use client"

import Pagination from "@/components/Pagination";
import Product from "@/components/Product";

export default function ProductListClient() {
    return (
        <section className="space-y-[40px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px]">
                {
                    Array.from({ length: 16 }).map((_, index) => {
                        return <Product key={index} />
                    })
                }
            </div>

            <Pagination />
        </section>
    )
}

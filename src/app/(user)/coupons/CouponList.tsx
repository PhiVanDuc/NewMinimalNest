"use client"

import { useRef } from "react";
import { useSearchParams } from "next/navigation";

import Coupon from "@/components/Coupon";
import Pagination from "@/components/Pagination";

export default function CouponList() {
    const couponListRef = useRef(null);
    const searchParams = useSearchParams();

    return (
        <div className="space-y-[40px]">
            <ul
                ref={couponListRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[25px]"
            >
                {
                    Array.from({ length: 10 }).map((_, index) => {
                        return <li key={index}><Coupon /></li>
                    })
                }
            </ul>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
                listRef={couponListRef}
            />
        </div>
    )
}
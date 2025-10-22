"use client"

import { useSelector } from "react-redux";

import DataTable from "@/components/DataTable";
import cartColumns from "@/app/(user)/cart/cart-columns";

import { cn } from "@/lib/utils";

import type { ReduxStateType } from "@/store/store";

export default function CartTable() {
    const cart = useSelector((state: ReduxStateType) => state.cart);

    return (
        <div
            className={cn(
                "space-y-[10px] w-full",
                "xl:w-[70%]"
            )}
        >
            <p className="desc-basic">Bạn có <span className="px-[10px] py-[5px] rounded-[8px] bg-theme-main text-white text-[14px] font-medium">3 sản phẩm</span> trong giỏ hàng</p>

            <DataTable
                data={cart.map(() => 1)}
                columns={cartColumns}
            />
        </div>
    )
}

"use client"

import DataTable from "@/components/DataTable";
import cartColumns from "@/app/(user)/cart/cart-columns";

import { cn } from "@/lib/utils";

export default function CartTable() {
    return (
        <div
            className={cn(
                "space-y-[10px] w-full",
                "xl:w-[70%]"
            )}
        >
            <p className="desc-basic">Bạn có <span className="px-[10px] py-[5px] rounded-[8px] bg-theme-main text-white text-[14px] font-medium">3 sản phẩm</span> trong giỏ hàng</p>

            <DataTable
                data={[]}
                columns={cartColumns}
                isLoading={false}
            />
        </div>
    )
}

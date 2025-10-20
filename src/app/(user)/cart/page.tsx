"use client"

import CartTable from "@/app/(user)/cart/components/CartTable";
import CartSummary from "@/app/(user)/cart/components/CartSummary";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <header>
                <h1 className="header-basic">Giỏ hàng</h1>
                <p className="desc-basic">Kiểm tra giỏ hàng của bạn và tiến hành thanh toán để hoàn tất đơn hàng.</p>
            </header>

            <div
                className={cn(
                    "flex flex-col items-start gap-[20px]",
                    "xl:flex-row"
                )}
            >
                <CartTable />
                <CartSummary />
            </div>
        </div>
    )
}
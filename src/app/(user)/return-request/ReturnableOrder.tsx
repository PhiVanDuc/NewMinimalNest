"use client"

import Price from "@/components/Price";
import OrderProduct from "@/components/OrderProduct";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Badge from "@/components/Badge";

export default function Order() {
    return (
        <div className="rounded-[10px] border border-zinc-200 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-[10px] p-[15px] border-b border-zinc-200">
                <div className="space-y-[2px]">
                    <p
                        className={cn(
                            "text-[13px] text-theme-main font-medium",
                            "md:text-[14px]"
                        )}
                    >
                        Mã đơn hàng
                    </p>

                    <p
                        className={cn(
                            "text-[14px] font-medium",
                            "md:text-[15px]"
                        )}
                    >
                        Chi tiết mã đơn hàng . . .
                    </p>
                </div>

                <div className="space-y-[2px]">
                    <p
                        className={cn(
                            "text-[13px] text-theme-main font-medium",
                            "md:text-[14px]"
                        )}
                    >
                        Thời gian tạo
                    </p>

                    <p
                        className={cn(
                            "text-[14px] font-medium",
                            "md:text-[15px]"
                        )}
                    >
                        23 Tháng 10 2025
                    </p>
                </div>
            </div>

            <div className="p-[15px] space-y-[10px] border-b border-zinc-200">
                <OrderProduct />
                <OrderProduct />
            </div>

            <div
                className={cn(
                    "flex flex-col gap-[15px] p-[15px] bg-neutral-50",
                    "sm:flex-row sm:justify-between"
                )}
            >
                <Button
                    className={cn(
                        "flex-1 bg-theme-main hover:bg-theme-main/95",
                        "sm:flex-none"
                    )}
                    asChild
                >
                    <Link href="/return-request/123">
                        Chọn đơn
                    </Link>
                </Button>
            </div>
        </div>
    )
}
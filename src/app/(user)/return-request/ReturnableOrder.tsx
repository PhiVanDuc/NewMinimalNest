"use client"

import Link from "next/link";
import ProductSummary from "@/components/ProductSummary";

import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";

import { cn } from "@/lib/utils";

export default function Order() {
    return (
        <div className="rounded-[10px] border border-zinc-300 overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-[10px] p-[15px] border-b border-zinc-300">
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

            <div className="p-[15px] space-y-[10px] border-b border-zinc-300">
                <ProductSummary />
                <ProductSummary />
            </div>

            <div
                className={cn(
                    "flex flex-col gap-[15px] p-[15px] bg-neutral-50",
                    "sm:flex-row sm:justify-between"
                )}
            >
                <Button
                    className={cn(
                        "flex-1",
                        "sm:flex-none"
                    )}
                    asChild
                >
                    <Link href="/return-request/123">
                        <FiEdit2 />
                        Tạo đơn hoàn trả
                    </Link>
                </Button>
            </div>
        </div>
    )
}
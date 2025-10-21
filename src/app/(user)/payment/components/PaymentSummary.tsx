"use client"

import Price from "@/components/Price";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

export default function PaymentSummary() {
    return (
        <div
            className={cn(
                "shrink-0 w-full rounded-[10px] p-[20px] border border-zinc-300 space-y-[20px] bg-white",
                "xl:sticky xl:top-[100px] xl:w-[370px]"
            )}
        >
            <div className="space-y-[15px] mb-[20px]">
                <header className="flex items-center justify-between mb-[15px]">
                    <h2
                        className={cn(
                            "text-[16px] font-semibold text-darkBold",
                            "sm:text-[18px]"
                        )}
                    >
                        Thông tin thanh toán
                    </h2>

                    <ShoppingCart size={20} />
                </header>

                <div
                    className={cn(
                        "space-y-[5px] text-[14px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p>Tổng tiền hàng</p>
                    <Price
                        priceClassName={cn(
                            "!text-[14px] font-medium",
                            "md:!text-[15px]"
                        )}
                    />
                </div>

                <div
                    className={cn(
                        "space-y-[5px] text-[14px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p>Giảm giá</p>
                    <Price
                        priceClassName={cn(
                            "!text-[14px] font-medium",
                            "md:!text-[15px]"
                        )}
                    />
                </div>

                <div
                    className={cn(
                        "space-y-[5px] text-[14px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p>Phí vận chuyển</p>
                    <p className="text-darkBold">Miễn phí</p>
                </div>
            </div>

            <Separator />

            <div className="space-y-[5px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                    <p className="text-[16px] font-semibold text-darkBold">Tổng hoá đơn</p>
                    <Price
                        priceClassName={cn(
                            "!text-[14px] font-medium",
                            "md:!text-[15px]"
                        )}
                    />
                </div>

                <p className="text-[12px] font-medium text-zinc-600 tracking-wide">Có thể dùng các phiếu giảm giá trong phần nhập thông tin thanh toán.</p>
            </div>

            <Button className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95">Hoàn tất thanh toán</Button>
        </div>
    )
}

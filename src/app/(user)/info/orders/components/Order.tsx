"use client"

import Price from "@/components/Price";
import OrderProduct from "@/components/OrderProduct";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Badge from "@/components/Badge";

export default function Order() {
    return (
        <div className="rounded-[10px] border border-zinc-200">
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

            <div className="p-[15px] space-y-[15px] border-b border-zinc-200">
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
                        "space-y-[5px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p
                        className={cn(
                            "text-[14px]",
                            "md:text-[15px]"
                        )}
                    >
                        Giảm giá
                    </p>

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

            <div className="p-[15px] space-y-[15px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                    <p className="text-[16px] font-semibold text-darkBold">Tổng hoá đơn</p>

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
                    <p>Trạng thái</p>
                    <Badge>Chưa thanh toán</Badge>
                </div>

                <div className="flex gap-[5px]">
                    <Button className="bg-theme-main hover:bg-theme-main/95">Chi tiết đơn hàng</Button>
                    <Button className="bg-transparent hover:bg-zinc-100 text-zinc-800">Huỷ đơn hàng</Button>
                </div>
            </div>
        </div>
    )
}
"use client"

import Badge from "@/components/Badge";
import Price from "@/components/Price";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { IoIosSend } from "react-icons/io";
import { ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

interface PropsType {
    isEdit?: boolean
}

export default function ReturnRequestSummary({ isEdit = true }: PropsType) {
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
                        Thông tin hoàn trả
                    </h2>

                    <ShoppingCart size={20} />
                </header>

                <div
                    className={cn(
                        "space-y-[5px] text-[14px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p>Tổng tạm</p>
                    <Price
                        priceClassName={cn(
                            "text-[14px] font-medium",
                            "md:text-[15px]"
                        )}
                    />
                </div>

                <div
                    className={cn(
                        "space-y-[5px] text-[14px] text-zinc-700 font-medium",
                        "md:flex md:items-center md:justify-between md:space-y-0"
                    )}
                >
                    <p>Giảm giá đã dùng</p>
                    <Price
                        priceClassName={cn(
                            "text-[14px] font-medium",
                            "md:text-[15px]"
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
                    <Price
                        priceClassName={cn(
                            "text-[14px] font-medium",
                            "md:text-[15px]"
                        )}
                    />
                </div>
            </div>

            <Separator />

            <div className="space-y-[5px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                    <p className="text-[16px] font-semibold text-darkBold">Tổng hoàn trả</p>
                    <Price
                        priceClassName={cn(
                            "text-[15px] font-semibold",
                            "md:text-[16px]"
                        )}
                    />
                </div>

                <p className="text-[12px] font-medium text-zinc-600 tracking-wide">Tiến hành bước thanh toán cuối cùng để hoàn thành đơn hàng.</p>
            </div>

            {
                isEdit ?
                    (
                        <Button className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95">
                            <IoIosSend />
                            Yêu cầu hoàn trả
                        </Button>
                    ) :
                    (
                        <Badge>
                            <p>Đang duyệt yêu cầu</p>
                        </Badge>
                    )
            }
        </div>
    )
}

"use client"

import Price from "@/components/Price";
import Badge from "@/components/Badge";

import { FaCircleInfo } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function ProductPrice() {
    return (
        <div className="space-y-[12px]">
            <div className="flex items-center gap-[15px] px-[15px] py-[5px] w-fit rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700">
                <FaCircleInfo className="text-[18px]" />
                <p className="text-[14px] font-medium">Còn hàng</p>
            </div>

            <div className="flex items-center justify-between">
                <div
                    className={cn(
                        "flex flex-col items-center gap-[5px]",
                        "sm:flex-row sm:gap-[15px]"
                    )}
                >
                    <Price
                        iconClassName={cn(
                            "hidden",
                            "min-[400px]:block min-[400px]:text-[20px]",
                            "sm:text-[25px] sm:translate-y-0"
                        )}
                        priceClassName={cn(
                            "text-[18px] font-semibold",
                            "sm:text-[22px]"
                        )}
                    />

                    <Price
                        iconClassName={cn(
                            "hidden text-zinc-400",
                            "min-[400px]:block min-[400px]:text-[20px]",
                            "sm:text-[25px] sm:translate-y-0"
                        )}
                        priceClassName="!text-[18px] text-zinc-600 font-medium opacity-60 line-through"
                    />
                </div>

                <Badge>
                    - 10%
                </Badge>
            </div>
        </div>
    )
}

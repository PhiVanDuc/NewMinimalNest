"use client"

import Price from "@/components/Price";
import { FaCircleInfo } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function ProductPrice() {
    return (
        <div className="space-y-[15px]">
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
                        priceClassName="!text-[18px] text-zinc-600 font-medium opacity-60 line-through"
                    />

                    <Price
                        iconClassName={cn(
                            "hidden",
                            "min-[400px]:block min-[400px]:text-[20px]",
                            "sm:text-[25px] sm:translate-y-0"
                        )}
                        priceClassName={cn(
                            "text-[18px] text-zinc-700 font-semibold",
                            "sm:text-[22px]"
                        )}
                    />
                </div>

                <p
                    className={cn(
                        "shrink-0 w-fit px-[10px] py-[4px] bg-theme-main/5 rounded-full text-[12px] text-theme-main font-medium",
                        "sm:text-[14px]"
                    )}
                >
                    - 10%
                </p>
            </div>

            <div className="flex items-center gap-[15px] px-[20px] py-[8px] rounded-full border border-theme-main/10 bg-theme-main/5 text-theme-main">
                <FaCircleInfo className="text-[20px]" />
                <p className="text-[15px] font-medium">Còn hàng</p>
            </div>
        </div>
    )
}

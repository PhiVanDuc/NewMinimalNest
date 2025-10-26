"use client"

import Price from "@/components/Price";
import Badge from "@/components/Badge";

import { cn } from "@/lib/utils";

export default function ProductPrice() {
    return (
        <div className="space-y-[12px]">
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
                    <p>- 10%</p>
                </Badge>
            </div>
        </div>
    )
}

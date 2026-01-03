"use client"

import Price from "@/components/Price";
import { cn } from "@/libs/utils";

interface Props {
    className?: string
}

export default function ProductSummary({ className = "" }: Props) {
    return (
        <div
            className={cn(
                "flex items-stretch gap-[15px] p-[15px] rounded-[10px] hover:bg-zinc-100 transition-colors cursor-pointer",
                className
            )}
        >
            <div
                className={cn(
                    "shrink-0 size-[60px] rounded-[10px] bg-zinc-300",
                    "md:size-[70px]",
                    "xl:size-[80px]"
                )}
            />

            <div className="self-stretch flex flex-col">
                <div
                    className={cn(
                        "flex-1 space-y-[1px]",
                        "md:space-y-[2px]"
                    )}
                >
                    <p
                        className={cn(
                            "text-[14px] text-zinc-700 font-medium capitalize",
                            "md:text-[15px]",
                        )}
                    >
                        <span>Bàn làm việc Ikea </span>

                        <span
                            className={cn(
                                "text-[12px] lowercase",
                                "md:text-[14px]"
                            )}
                        >
                            (x2)
                        </span>
                    </p>

                    <Price
                        className={cn(
                            "text-[12px]",
                            "sm:text-[13px]",
                            "md:text-[14px]"
                        )}
                    />
                </div>

                <div className="flex items-center gap-[10px]">
                    <p
                        className={cn(
                            "text-[12px] text-zinc-600 font-medium",
                            "md:text-[14px]"
                        )}
                    >
                        Màu sắc
                    </p>

                    <span
                        className={cn(
                            "shrink-0 w-[10px] aspect-square rounded-full bg-amber-400 outline-[2px] outline-offset-1 outline-zinc-100 hover:outline-zinc-200 transition-colors cursor-pointer",
                            "md:w-[15px] md:outline-offset-2"
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

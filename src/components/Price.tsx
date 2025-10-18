"use client"

import { IoMdPricetag } from "react-icons/io";
import { cn } from "@/lib/utils";

interface PropsType {
    className?: string,
    isIcon?: boolean,
    iconClassName?: string,
    priceClassName?: string
}

export default function Price({ className, isIcon = true, iconClassName, priceClassName }: PropsType) {
    return (
        <div
            className={cn(
                "flex items-center gap-[10px]",
                className
            )}
        >
            {
                isIcon ?
                    <IoMdPricetag
                        className={cn(
                            "text-[16px]",
                            "sm:text-[18px]",
                            iconClassName
                        )}
                    /> :
                    null
            }

            <p
                className={cn(
                    "text-[12px] text-zinc-700",
                    "sm:text-[13px]",
                    priceClassName
                )}
            >
                <span>999.000 </span>
                <span>VNĐ</span>
            </p>
        </div>
    )
}

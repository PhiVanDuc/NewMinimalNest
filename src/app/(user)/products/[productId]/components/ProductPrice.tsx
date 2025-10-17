"use client"

import { IoMdPricetag } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function ProductPrice() {
    return (
        <div className="space-y-[15px]">
            <div className="flex items-center justify-between">
                <div
                    className={cn(
                        "flex gap-[15px]",
                        "sm:items-center"
                    )}
                >
                    <IoMdPricetag
                        className={cn(
                            "hidden text-[20px] translate-y-[2px]",
                            "min-[400px]:inline-block min-[400px]:text-[25px]",
                            "sm:text-[30px] sm:translate-y-0"
                        )}
                    />

                    <div
                        className={cn(
                            "flex flex-col gap-[5px]",
                            "sm:flex-row sm:items-end sm:gap-[15px]"
                        )}
                    >
                        <p
                            className={cn(
                                "text-[18px] text-zinc-600 font-semibold",
                                "sm:text-[22px]"
                            )}
                        >
                            <span>899.000</span>
                            <span className="inline-block w-[8px]" />
                            <span
                                className={cn(
                                    "text-[14px] underline",
                                    "lg:text-[18px]"
                                )}
                            >VNĐ</span>
                        </p>

                        <p
                            className="text-[18px] text-zinc-600 font-medium opacity-60"
                        >
                            <span className="line-through">999.000</span>
                            <span className="inline-block w-[8px]" />
                            <span className="text-[14px] underline">VNĐ</span>
                        </p>
                    </div>
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

"use client"

import { FaStar } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function ProductHeader() {
    return (
        <header className="flex flex-col gap-[8px]">
            <h1
                className={cn(
                    "text-[20px] font-bold capitalize",
                    "md:text-[30px]",
                    "xl:text-[40px]"
                )}
            >
                Bàn làm việc isolate
            </h1>

            <div className="flex items-center gap-[8px]">
                <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />

                <div className="flex items-center gap-[5px]">
                    <p className="text-[15px] text-zinc-600 font-medium leading-tight">(4.9)</p>
                    <p className="text-[14px] text-zinc-500 font-medium">200 Lượt đánh giá.</p>
                </div>
            </div>
        </header>
    )
}

"use client"

import { FaStar } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function ProductHeader() {
    return (
        <header
            className={cn(
                "flex flex-col justify-between gap-[8px]",
                "xl:flex-row xl:items-center"
            )}
        >
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
                <p className="text-zinc-600 font-medium leading-tight">
                    4.9
                </p>

                <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />
            </div>
        </header>
    )
}

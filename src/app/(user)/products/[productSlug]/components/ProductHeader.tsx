"use client"

import Badge from "@/components/Badge";

import { FaStar } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

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

            <div className="flex flex-wrap gap-[8px] items-center justify-between">
                <Badge>
                    <div className="flex items-center gap-[10px]">
                        <FaCircleInfo className="text-[18px]" />
                        <p>Còn hàng</p>
                    </div>
                </Badge>

                <div className="flex items-center gap-[8px]">
                    <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />

                    <div className="flex items-center gap-[5px]">
                        <p className="text-[15px] text-zinc-600 font-medium leading-tight">(4.9 sao)</p>
                        <p className="text-[14px] text-zinc-500 font-medium">200 Lượt đánh giá.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

{/* <div className="flex items-center gap-[15px] px-[15px] py-[5px] w-fit rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700">
    <FaCircleInfo className="text-[18px]" />
    <p className="text-[14px] font-medium">Còn hàng</p>
</div> */}
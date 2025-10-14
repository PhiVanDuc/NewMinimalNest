"use client"

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

export default function Pagination() {
    return (
        <div
            className="flex items-center justify-between"
        >
            <div
                className={cn(
                    "flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-theme-main"
                )}
            >
                <p
                    className={cn(
                        "text-[14px] text-white",
                        "md:text-[15px]"
                    )}
                >
                    Trang
                </p>

                <Input
                    className={cn(
                        "h-[30px] w-[50px] border-2 text-white focus-visible:border-white focus-visible:ring-white/40"
                    )}
                />

                <p
                    className={cn(
                        "text-[14px] text-white",
                        "md:text-[15px]"
                    )}
                >
                    / 10
                </p>
            </div>

            <div className="flex gap-[8px] w-fit">
                <button
                    className={cn(
                        "shrink-0 flex items-center justify-center w-[40px] aspect-square rounded-full bg-theme-main text-white cursor-pointer"
                    )}
                >
                    <FaChevronLeft
                        className={cn(
                            "text-[14px]",
                            "md:text-[16px]"
                        )}
                    />
                </button>

                <button
                    className={cn(
                        "shrink-0 flex items-center justify-center w-[40px] aspect-square rounded-full bg-theme-main text-white cursor-pointer"
                    )}
                >
                    <FaChevronRight
                        className={cn(
                            "text-[14px]",
                            "md:text-[16px]"
                        )}
                    />
                </button>
            </div>
        </div>
    )
}
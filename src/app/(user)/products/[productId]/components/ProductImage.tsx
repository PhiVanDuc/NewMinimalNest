"use client"

import { Button } from "@/components/ui/button";
import { TbLayoutGridFilled } from "react-icons/tb";

import { cn } from "@/lib/utils";

export default function ProductImage() {
    return (
        <section
            className={cn(
                "relative w-full aspect-square",
                "xl:w-[50%]"
            )}
        >
            <div
                className={cn(
                    "w-full aspect-square hidden grid-cols-2 gap-[10px]",
                    "md:grid"
                )}
            >
                <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
            </div>

            <div
                className={cn(
                    "w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer",
                    "md:hidden"
                )}
            />

            <Button
                className="absolute bottom-[15px] right-[15px] flex items-center bg-theme-main hover:bg-theme-main/95 transition-colors cursor-pointer"
            >
                <TbLayoutGridFilled className="!size-5 translate-y-[-1px]" />
                <span className="leading-tight">Hiển thị thêm</span>
            </Button>
        </section>
    )
}
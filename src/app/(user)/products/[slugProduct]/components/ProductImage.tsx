"use client"

import { useState } from "react";

import ProductImageList from "@/app/(user)/products/[slugProduct]/components/ProductImageList";

import { Button } from "@/components/ui/button";
import { TbLayoutGridFilled } from "react-icons/tb";

import { cn } from "@/lib/utils";

export default function ProductImage() {
    const [isOpenDrawer, setisOpenDrawer] = useState(false);

    return (
        <section
            className={cn(
                "relative w-full aspect-square",
                "xl:w-[50%]"
            )}
        >
            <div
                className={cn(
                    "hidden grid-cols-2 gap-[10px] w-full aspect-square",
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
                className="absolute bottom-[15px] right-[15px] flex items-center transition-colors cursor-pointer"
                onClick={() => { setisOpenDrawer(true) }}
            >
                <TbLayoutGridFilled className="!size-5 translate-y-[-1px]" />
                <span className="leading-tight">Hiển thị thêm</span>
            </Button>

            <ProductImageList
                isOpen={isOpenDrawer}
                setIsOpen={setisOpenDrawer}
            />
        </section>
    )
}
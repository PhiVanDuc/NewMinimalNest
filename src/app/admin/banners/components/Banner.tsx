"use client"

import Link from "next/link";
import Silk from "@/components/Silk";
import BannersDeleteAction from "@/app/admin/banners/components/BannersDeleteAction";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

interface PropsType {
    bannerType: "product" | "event"
}

export default function Banner({ bannerType }: PropsType) {
    return (
        <div
            className={cn(
                "relative w-full aspect-square rounded-[10px] overflow-hidden",
                "md:aspect-video",
                "xl:aspect-16/6"
            )}
        >
            <Silk
                speed={5}
                noiseIntensity={1}
                color="#12778A"
            />

            <DropdownMenu>
                <DropdownMenuTrigger className="absolute top-[15px] right-[15px] flex items-center justify-center size-[40px] rounded-full bg-white/30 hover:bg-white/35 backdrop-blur-md transition cursor-pointer">
                    <HiDotsVertical
                        size={18}
                        className="text-white"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href="/admin/banners/banner-slug">
                            <IoReloadOutline />
                            Cập nhật
                        </Link>
                    </DropdownMenuItem>

                    <BannersDeleteAction />
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="absolute position-center w-full flex flex-col items-center px-[20px]">
                <div
                    id="banner-badge"
                    className={cn(
                        "px-[20px] py-[6px] mb-[15px] rounded-full bg-white/30 hover:bg-white/35 backdrop-blur-md text-[12px] text-white transition-colors cursor-pointer",
                        "md:text-[14px]"
                    )}
                >
                    <span>
                        Sản phẩm
                    </span>
                </div>

                <h1
                    id="banner-title"
                    className={cn(
                        "text-[20px] text-white text-center font-extrabold capitalize truncate-2",
                        "md:text-[30px]",
                        "xl:text-[40px]"
                    )}
                >
                    Bàn làm việc ISOMATRIC
                </h1>
            </div>
        </div>
    )
}
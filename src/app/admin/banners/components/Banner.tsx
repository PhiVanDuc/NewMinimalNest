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

import { cn } from "@/libs/utils";

interface Props {
    bannerType: "product" | "discount" | "coupon",
    colorCode: string
}

export default function Banner({ bannerType, colorCode }: Props) {
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
                color={colorCode || "#12778A"}
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

            <div className="absolute position-center w-full flex flex-col items-center gap-[15px] px-[20px]">
                <div
                    id="banner-badge"
                    className={cn(
                        "px-[20px] py-[6px] rounded-full bg-white/30 hover:bg-white/35 backdrop-blur-md text-[12px] text-white transition-colors cursor-pointer",
                        "md:text-[14px]"
                    )}
                >
                    <span>
                        {
                            bannerType === "product" ? "Sản phẩm" :
                                bannerType === "coupon" ? "Phiếu giảm giá" :
                                    bannerType === "discount" && "Giảm giá"
                        }
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
                    {
                        bannerType === "product" ? "Bàn làm việc ISOMATRIC" :
                            bannerType === "coupon" ? "Phiếu giảm giá 28 tháng 11" :
                                bannerType === "discount" && "Giảm giá BLACK FRIDAY"
                    }

                </h1>
            </div>
        </div>
    )
}
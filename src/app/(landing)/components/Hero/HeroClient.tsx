"use client"

import { useState } from "react";

import Link from "next/link";
import Squares from "@/components/Squares";
import HeroInfoProduct from "./HeroInfoProduct";
import HeroNavigateProduct from "@/app/(landing)/components/Hero/HeroNavigateProduct";

import { FaChevronRight } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function HeroClient() {
    const [currentProduct, setCurrentProduct] = useState({
        category: "Danh mục",
        name: "Tên sản phẩm",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quia sit nostrum inventore at impedit commodi quos nobis, voluptates vero accusamus tenetur neque, doloribus voluptatum quis cum.",
        thumb: "/images/static-sofa.png",
        subThumbs: ["/images/static-overrall-sofa.webp", "/images/static-overrall-sofa.avif"]
    })

    return (
        <section className={cn(
            "relative flex flex-col items-center h-dvh container-horizontal bg-zinc-100",
            "lg:flex-row lg:gap-[40px]"
        )}>
            {/* Hình nền động */}
            <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal'
                borderColor='#ccc'
                hoverFillColor="transparent"
            />

            {/* Nút khám phá */}
            <div
                className={cn(
                    "group absolute right-[20px] bottom-[20px] flex items-center gap-[10px] p-[5px] rounded-full bg-theme-main/30 z-10",
                    "sm:gap-[15px] sm:pr-[15px]",
                    "md:right-[40px] md:bottom-[40px] md:pr-[20px]",
                    "lg:gap-[20px] lg:bottom-[60px]",
                    "xl:right-[80px]",
                    "2xl:right-[160px]"
                )}
            >
                <Link
                    href="/products/slug-product"
                    className={cn(
                        "text-[10px] text-white font-semibold uppercase px-[15px] py-[8px] rounded-full bg-theme-main cursor-pointer",
                        "lg:text-[12px]"
                    )}
                >
                    Khám phá
                </Link>

                <p
                    className={cn(
                        "hidden text-[12px] text-theme-main font-medium",
                        "sm:block",
                        "lg:text-[14px]"
                    )}
                >
                    Chi tiết sản phẩm
                </p>

                <FaChevronRight
                    className={cn(
                        "hidden text-[13px] text-theme-main group-hover:animate-[bounceX_1.2s_ease-in-out_infinite]",
                        "sm:block",
                        "lg:text-[15px]"
                    )}
                />
            </div>

            {/* Thông tin sản phẩm */}
            <HeroInfoProduct
                currentProduct={currentProduct}
            />

            {/* Điều hướng sản phẩm */}
            <HeroNavigateProduct
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
            />
        </section>
    )
}
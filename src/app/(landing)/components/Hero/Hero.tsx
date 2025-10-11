"use client"

import { useState } from "react";

import Squares from "@/components/Squares";
import { Button } from "@/components/ui/button";
import HeroNavigateProduct from "@/app/(landing)/components/Hero/HeroNavigateProduct";

import { FiShoppingCart } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";

import { cn } from "@/lib/utils";

export default function Hero() {
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
                    "group absolute position-edge-right bottom-[20px] flex items-center gap-[10px] p-[5px] pr-[10px] rounded-full bg-theme-main/30 cursor-pointer z-10",
                    "md:gap-[15px] md:bottom-[40px] md:pr-[15px]",
                    "lg:gap-[20px] lg:bottom-[60px] md:pr-[20px]"
                )}
            >
                <button
                    className={cn(
                        "text-[10px] text-white font-semibold uppercase px-[15px] py-[8px] rounded-full bg-theme-main cursor-pointer",
                        "lg:text-[12px]"
                    )}
                >
                    Khám phá
                </button>

                <p
                    className={cn(
                        "text-[12px] text-theme-main font-medium",
                        "lg:text-[14px]"
                    )}
                >
                    Chi tiết sản phẩm
                </p>

                <FaChevronRight
                    className={cn(
                        "text-[13px] text-theme-main group-hover:animate-[bounceX_1.2s_ease-in-out_infinite]",
                        "lg:text-[15px]"
                    )}
                />
            </div>

            {/* Khối bên trái - bên trên */}
            <div
                className={cn(
                    "relative shrink-0 mt-[120px] w-full z-10",
                    "lg:mt-0 lg:w-[40%]"
                )}
            >
                <div
                    className={cn(
                        "leading-tight space-y-[8px] mb-[30px]",
                        "lg:mb-[100px]"
                    )}
                >
                    <p
                        className={cn(
                            "uppercase text-[16px] text-zinc-800 font-semibold",
                            "lg:text-[20px]"
                        )}
                    >
                        Danh mục
                    </p>

                    <h1
                        className={cn(
                            "text-[30px] text-theme-main font-bold",
                            "sm:text-[40px]",
                            "md:text-[50px]",
                        )}
                    >
                        Tên sản phẩm
                    </h1>
                </div>

                <div
                    className={cn(
                        "space-y-[6px]",
                        "lg:mb-[40px]"
                    )}
                >
                    <p
                        className={cn(
                            "text-[16px] font-medium",
                            "md:text-[18px]"
                        )}
                    >
                        Giới thiệu sản phẩm
                    </p>

                    <p
                        className={cn(
                            "text-[14px] text-zinc-500",
                            "md:text-[16px]"
                        )}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quia sit nostrum inventore at impedit commodi quos nobis, voluptates vero accusamus tenetur neque, doloribus voluptatum quis cum.
                    </p>
                </div>

                <div
                    className={cn(
                        "hidden gap-[10px]",
                        "lg:flex"
                    )}
                >
                    <Button
                        className="px-[20px] py-[25px] gap-[12px] cursor-pointer transition-colors"
                        size="lg"
                    >
                        <MdOutlineShoppingBag className="!size-5" />
                        Mua ngay
                    </Button>

                    <Button className="px-[20px] py-[25px] gap-[12px] bg-theme-main hover:bg-theme-main/95 cursor-pointer transition-colors">
                        <FiShoppingCart className="!size-5" />
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>

            {/* Khối bên phải - bên dưới */}
            <HeroNavigateProduct
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
            />
        </section>
    )
}
"use client"

import { useState } from "react";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

import gsap from "gsap";
import { cn } from "@/lib/utils";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    currentProduct: {
        category: string,
        name: string,
        description: string,
        thumb: string,
        subThumbs: string[]
    },
    setCurrentProduct: Dispatch<SetStateAction<{
        category: string,
        name: string,
        description: string,
        thumb: string,
        subThumbs: string[]
    }>>
}

export default function HeroNavigateProduct({ currentProduct, setCurrentProduct }: PropsType) {
    const [navigateDirection, setNavigateDirection] = useState<"up" | "down" | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power2.out", duration: 0.5 },
            onComplete: () => setNavigateDirection(null)
        });

        if (navigateDirection === "up") {
            tl
                .to(
                    "#hero-product-sub-thumb-top",
                    {
                        marginTop: "-60px",
                        opacity: 0
                    }
                )
                .to(
                    "#hero-product-sub-thumb-bottom",
                    {
                        marginBottom: "60px",
                        opacity: 0
                    },
                    "<"
                )
                .to(
                    "#hero-product-thumb",
                    {
                        y: "-60px",
                        opacity: 0
                    },
                    "<+0.25"
                )
                .set(
                    "#hero-product-sub-thumb-top",
                    { marginTop: "60px" }
                )
                .set(
                    "#hero-product-sub-thumb-bottom",
                    { marginBottom: "-60px" }
                )
                .set(
                    "#hero-product-thumb",
                    { y: "60px" }
                )
                .to(
                    "#hero-product-sub-thumb-top",
                    {
                        marginTop: "0px",
                        opacity: 1
                    }
                )
                .to(
                    "#hero-product-sub-thumb-bottom",
                    {
                        marginBottom: "0px",
                        opacity: 1
                    },
                    "<"
                )
                .to(
                    "#hero-product-thumb",
                    {
                        y: "0px",
                        opacity: 1
                    },
                    "<+0.25"
                )
        }
        else if (navigateDirection === "down") {
            tl
                .to(
                    "#hero-product-sub-thumb-top",
                    {
                        marginTop: "60px",
                        opacity: 0
                    }
                )
                .to(
                    "#hero-product-sub-thumb-bottom",
                    {
                        marginBottom: "-60px",
                        opacity: 0
                    },
                    "<"
                )
                .to(
                    "#hero-product-thumb",
                    {
                        y: "60px",
                        opacity: 0
                    },
                    "<+0.25"
                )
                .set(
                    "#hero-product-sub-thumb-top",
                    { marginTop: "-60px" }
                )
                .set(
                    "#hero-product-sub-thumb-bottom",
                    { marginBottom: "60px" }
                )
                .set(
                    "#hero-product-thumb",
                    { y: "-60px" }
                )
                .to(
                    "#hero-product-sub-thumb-top",
                    {
                        marginTop: "0px",
                        opacity: 1
                    }
                )
                .to(
                    "#hero-product-sub-thumb-bottom",
                    {
                        marginBottom: "0px",
                        opacity: 1
                    },
                    "<"
                )
                .to(
                    "#hero-product-thumb",
                    {
                        y: "0px",
                        opacity: 1
                    },
                    "<+0.25"
                )
        }
    }, [navigateDirection]);

    const handleNavigateProduct = (direction: "up" | "down") => {
        setNavigateDirection(direction);
    };

    return (
        <div
            className={cn(
                "relative flex-1 flex justify-end items-center gap-[20px] w-full",
                "lg:w-[60%] lg:gap-[50px]"
            )}
        >
            <div
                className={cn(
                    "flex items-center justify-center w-full h-full",
                    "lg:w-[80%] lg:h-auto lg:aspect-square"
                )}
            >
                <div
                    className={cn(
                        "relative flex items-center justify-center w-full max-w-[400px] aspect-square rounded-full bg-theme-main/15",
                        'lg:max-w-[550px]'
                    )}
                >
                    <div
                        id="hero-product-sub-thumb-top"
                        className={cn(
                            "absolute right-0 top-[-10%] translate-y-[10%] w-[60px] aspect-square bg-theme-main overflow-hidden",
                            "min-[350px]:w-[80px]",
                            "min-[400px]:w-[100px]",
                            "min-[450px]:w-[130px]",
                            "lg:w-[150px]",
                            "xl:w-[160px]",
                            "2xl:w-[180px]"
                        )}
                        style={{
                            borderRadius: "55% 60% 65% 50% / 60% 55% 60% 50%",
                            animation: "morph 5s linear infinite"
                        }}
                    >
                        <Image
                            src="/images/static-overrall-sofa.webp"
                            alt="Landing Hero Image"
                            width={1500}
                            height={1500}
                            className="w-full aspect-square object-cover object-center pointer-events-none"
                            priority={true}
                        />
                    </div>

                    <Image
                        src="/images/static-sofa.png"
                        alt="Landing Hero Image"
                        width={1500}
                        height={1500}
                        id="hero-product-thumb"
                        className="w-[80%] aspect-square object-cover object-center pointer-events-none"
                        priority={true}
                    />

                    <div
                        id="hero-product-sub-thumb-bottom"
                        className={cn(
                            "absolute left-0 bottom-[-10%] translate-y-[-10%] w-[60px] aspect-square bg-theme-main overflow-hidden",
                            "min-[350px]:w-[80px]",
                            "min-[400px]:w-[100px]",
                            "min-[450px]:w-[130px]",
                            "lg:w-[150px]",
                            "xl:w-[160px]",
                            "2xl:w-[180px]"
                        )}
                        style={{
                            borderRadius: "55% 60% 65% 50% / 60% 55% 60% 50%",
                            animation: "morph 6s ease-in-out infinite"
                        }}
                    >

                        <Image
                            src="/images/static-overrall-sofa.avif"
                            alt="Landing Hero Image"
                            width={1500}
                            height={1500}
                            className="w-full aspect-square object-cover object-center pointer-events-none"
                            priority={true}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[20px]">
                <button
                    className={cn(
                        "flex items-center justify-center w-[35px] aspect-square rounded-full text-white bg-theme-main hover:bg-theme-main/95 cursor-pointer transition-colors",
                        "lg:w-[40px]"
                    )}
                    onClick={() => handleNavigateProduct("up")}
                >
                    <FaChevronUp
                        className={cn(
                            "text-[14px]",
                            "lg:text-[18px]"
                        )}
                    />
                </button>

                <div className="space-y-[5px]">
                    <div className="w-[4px] h-[50px] rounded-full bg-theme-main" />
                    <div className="w-[4px] aspect-square rounded-full bg-theme-main" />
                    <div className="w-[4px] h-[25px] rounded-full bg-zinc-400" />
                </div>

                <button
                    className={cn(
                        "flex items-center justify-center w-[35px] aspect-square rounded-full bg-white hover:bg-zinc-100 cursor-pointer transition-colors",
                        "lg:w-[40px]"
                    )}
                    onClick={() => handleNavigateProduct("down")}
                >
                    <FaChevronDown
                        className={cn(
                            "text-[14px]",
                            "lg:text-[18px]"
                        )}
                    />
                </button>
            </div>
        </div>
    )
}
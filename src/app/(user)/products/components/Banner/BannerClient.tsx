"use client"

import { useState } from "react";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import Silk from "@/components/Silk";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function BannerClient() {
    const [navigateDirection, setNavigateDirection] = useState<"prev" | "next" | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power2.out", duration: 0.5 },
            onComplete: () => setNavigateDirection(null)
        });

        if (navigateDirection) {
            tl
                .to(
                    "#banner-badge span",
                    { opacity: 0 }
                )
                .to(
                    "#banner-title",
                    {
                        y: "30px",
                        opacity: 0
                    },
                    "<"
                )
                .to(
                    "#banner-badge span",
                    { opacity: 1 }
                )
                .to(
                    "#banner-title",
                    {
                        y: 0,
                        opacity: 1
                    },
                    "<"
                )
        }
    }, [navigateDirection]);

    const handleNavigateBanner = (direction: "prev" | "next") => {
        setNavigateDirection(direction);
    };

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

            <div
                className={cn(
                    "absolute position-center w-full flex flex-col items-center px-[20px]",
                    ""
                )}
            >
                <Link
                    href=""
                    id="banner-badge"
                    className={cn(
                        "px-[20px] py-[6px] mb-[15px] rounded-full bg-white/30 hover:bg-white/35 backdrop-blur-md text-[12px] text-white transition-colors cursor-pointer",
                        "md:text-[14px]"
                    )}
                >
                    <span>
                        Sản phẩm
                    </span>
                </Link>

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

            <div className="absolute bottom-[20px] right-[20px] flex items-center gap-[10px]">
                <button
                    className={cn(
                        "flex items-center justify-center w-[35px] aspect-square rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-md text-white transition-colors cursor-pointer",
                        "md:w-[40px]"
                    )}
                    onClick={() => { handleNavigateBanner("prev") }}
                >
                    <FaChevronLeft className="text-[14px] md:text-[16px]" />
                </button>

                <button
                    className={cn(
                        "flex items-center justify-center w-[35px] aspect-square rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-md text-white transition-colors cursor-pointer",
                        "md:w-[40px]"
                    )}
                    onClick={() => { handleNavigateBanner("next") }}
                >
                    <FaChevronRight className="text-[14px] md:text-[16px]" />
                </button>
            </div>
        </div>
    )
}
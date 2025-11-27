"use client"

import Silk from "@/components/Silk";

import { cn } from "@/lib/utils";

export default function Banner() {
    return (
        <div
            className={cn(
                "relative w-full aspect-square rounded-[10px] overflow-hidden",
                "sm:aspect-video",
                "lg:aspect-16/6"
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
                        "text-[20px] text-white text-center font-extrabold capitalize truncate-1",
                        "md:text-[40px] md:truncate-2"
                    )}
                >
                    Bàn làm việc ISOMATRIC
                </h1>
            </div>
        </div>
    )
}

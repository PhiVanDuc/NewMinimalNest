"use client"

import { cn } from "@/libs/utils";

export default function Logo({
    size = 30,
    className = "",
    translateTop = "translate-x-[2px] translate-y-[5px]",
    translateDown = "translate-x-[-2px] translate-y-[-5px]"
}) {
    return (
        <div className={cn(
            "rotate-z-[12deg] w-fit h-fit",
            className
        )}>
            <div
                className={cn(
                    "logo-right aspect-square bg-white",
                    translateTop
                )}
                style={{
                    width: `${size}px`,
                    clipPath: "polygon(0 50%, 100% 0, 50% 100%, 50% 50%)"
                }}
            />

            <div
                className={cn(
                    "logo-left aspect-square bg-white",
                    translateDown
                )}
                style={{
                    width: `${size}px`,
                    clipPath: "polygon(50% 0, 50% 50%, 100% 50%, 0 100%)"
                }}
            />
        </div>
    )
}
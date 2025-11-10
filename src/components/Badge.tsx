"use client"

import { cn } from "@/lib/utils";

interface PropsType {
    readonly children: React.ReactNode,
    variant?: "blur" | "solid" | "outline",
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Badge({ children, variant = "blur", className = "", onClick }: PropsType) {
    return (
        <div
            className={cn(
                "w-fit h-fit px-[15px] py-[5px] rounded-full text-[12px] font-medium",
                "sm:text-[13px]",
                variant === "blur" ? "bg-theme-main/10 text-theme-main" :
                    variant === "outline" ? "border border-zinc-300 text-zinc-700" :
                        variant === "solid" && "bg-theme-main text-white",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
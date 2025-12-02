"use client"

import { cn } from "@/libs/utils";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "blur" | "solid" | "outline"
}

export default function Badge({ children, className = "", variant = "blur", ...props }: PropsType) {
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
            {...props}
        >
            {children}
        </div>
    )
}
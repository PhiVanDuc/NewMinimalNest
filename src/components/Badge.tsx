"use client"

import { cn } from "@/lib/utils";

interface PropsType {
    readonly children: React.ReactNode,
    className?: string
}

export default function Badge({ children, className = "" }: PropsType) {
    return (
        <p
            className={cn(
                "shrink-0 w-fit px-[10px] py-[4px] bg-theme-main/5 rounded-full text-[12px] text-theme-main font-medium",
                "sm:text-[14px]",
                className
            )}
        >
            {children}
        </p>
    )
}

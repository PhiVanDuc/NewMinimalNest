"use client"

import { cn } from "@/libs/utils";

interface PropsType {
    className?: string
}

export default function Price({ className }: PropsType) {
    return (
        <p
            className={cn(
                "text-zinc-700 font-medium",
                className
            )}
        >
            <span>999.000 </span>
            <span>VND</span>
        </p>
    )
}
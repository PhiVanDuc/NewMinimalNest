"use client"

import { cn } from "@/lib/utils";

interface PropsType {
    className?: string,
    title: string
}

export default function DrawerSectionTitle({ className = "", title }: PropsType) {
    return (
        <p
            className={cn(
                "text-[12px] text-zinc-400 font-bold uppercase",
                className
            )}
        >
            {title}
        </p>
    )
}

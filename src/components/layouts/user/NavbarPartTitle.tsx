"use client"

import { cn } from "@/lib/utils";

interface PropsType {
    title: string,
    className?: string
}

export default function NavbarPartTitle({ title, className = "" }: PropsType) {
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

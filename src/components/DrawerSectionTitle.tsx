"use client"

import { cn } from "@/libs/utils";

interface Props {
    className?: string,
    title: string
}

export default function DrawerSectionTitle({ className = "", title }: Props) {
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

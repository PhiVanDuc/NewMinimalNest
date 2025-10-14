"use client"

import { Button } from "@/components/ui/button";

import { IoFilter } from "react-icons/io5";

export default function ButtonToggleFilter() {
    return (
        <Button className="gap-[14px] rounded-full bg-zinc-800 hover:bg-zinc-800/95 transition-colors cursor-pointer">
            <IoFilter className="!size-5" />

            <span>Bộ lọc</span>
        </Button>
    )
}

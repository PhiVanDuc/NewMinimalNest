"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

export default function ColorsFilter() {
    const router = useRouter();
    const [filter, setFilter] = useState({ name: "" });

    const handleClickFilter = () => {
        router.refresh();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={filter.name}
                placeholder="Lọc tên màu sắc . . ."
                className="w-[300px]"
                onChange={(e) => setFilter(() => ({ name: e.target.value }))}
            />

            <button
                type="button"
                className="flex items-center justify-center size-[46px] rounded-full bg-theme-main hover:bg-theme-main/95 cursor-pointer"
                onClick={handleClickFilter}
            >
                <SearchIcon
                    size={20}
                    className="text-white"
                />
            </button>
        </div>
    )
}

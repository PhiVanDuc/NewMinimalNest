"use client"

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";

export interface Filter {
    name: string
}

interface Props {
    setFilter: Dispatch<SetStateAction<Filter>>
}

export default function CategoryFilter({ setFilter }: Props) {
    const queryClient = useQueryClient();
    const [tempFilter, setTempFilter] = useState({ name: "" });

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempFilter(() => ({ name: e.target.value }))
    }

    const handleClickFilter = () => {
        setFilter(tempFilter);
        queryClient.invalidateQueries({ queryKey: ["adminCategories"] });
    }

    const handleKeyUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.keyCode === 13) handleClickFilter();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={tempFilter.name}
                placeholder="Lọc tên danh mục . . ."
                className="w-full max-w-[300px]"
                onChange={handleChangeName}
                onKeyUp={handleKeyUpEnter}
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
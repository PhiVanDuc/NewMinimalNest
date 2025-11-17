"use client"

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";

type ColorsType = {
    name: string
}

interface PropsType {
    filters: ColorsType,
    setFilters: Dispatch<SetStateAction<ColorsType>>
}

export default function ColorsFilter({ filters, setFilters }: PropsType) {
    const router = useRouter();

    const handleChangeColorName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(() => {
            return { name: e.target.value }
        });
    }

    const handleClickFilter = () => {
        router.refresh();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={filters.name}
                placeholder="Lọc tên màu sắc . . ."
                className="w-[300px]"
                onChange={handleChangeColorName}
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

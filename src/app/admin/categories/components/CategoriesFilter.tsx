"use client"

import { useRouter } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type CategoriesType = {
    categoryName: string
}

interface PropsType {
    filters: CategoriesType,
    setFilters: Dispatch<SetStateAction<CategoriesType>>
}

export default function CategoriesFilter({ filters, setFilters }: PropsType) {
    const router = useRouter();

    const handleChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(() => {
            return { categoryName: e.target.value }
        });
    }

    const handleClickFilter = () => {
        router.refresh();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={filters.categoryName}
                placeholder="Lọc tên danh mục . . ."
                className="w-[300px]"
                onChange={handleChangeCategoryName}
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

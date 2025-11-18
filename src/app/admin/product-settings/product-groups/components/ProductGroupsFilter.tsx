"use client"

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";

type FilterType = {
    name: string
}

interface PropsType {
    filter: FilterType,
    setFilter: Dispatch<SetStateAction<FilterType>>
}

export default function ProductGroupsFilter({ filter, setFilter }: PropsType) {
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(() => {
            return { name: e.target.value }
        });
    }

    const handleClickFilter = () => {
        router.refresh();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={filter.name}
                placeholder="Lọc tên nhóm sản phẩm . . ."
                className="w-[300px]"
                onChange={handleChange}
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

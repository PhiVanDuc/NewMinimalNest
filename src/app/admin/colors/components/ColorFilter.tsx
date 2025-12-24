"use client"

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";
import type { ColorsFilterDataType } from "@/app/admin/colors/types";

interface PropsType {
    setFilter: Dispatch<SetStateAction<ColorsFilterDataType>>
}

export default function ColorFilter({ setFilter }: PropsType) {
    const queryClient = useQueryClient();

    const [tempFilter, setTempFilter] = useState({
        name: ""
    });

    const handleChangeColorName = (e: React.ChangeEvent<HTMLInputElement>) => setTempFilter(() => ({ name: e.target.value }));

    const handleClickFilter = () => {
        setFilter(tempFilter);
        queryClient.invalidateQueries({ queryKey: ["adminColors"] });
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={tempFilter.name}
                placeholder="Lọc tên màu sắc . . ."
                className="w-full max-w-[300px]"
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
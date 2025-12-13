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

export default function ColorsFilter({ setFilter }: PropsType) {
    const queryClient = useQueryClient();
    const [tempFilter, setTempFilter] = useState({
        name: ""
    });

    const handleClickFilter = () => {
        setFilter(tempFilter);
        queryClient.invalidateQueries({ queryKey: ["adminColors"] });
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <Input
                value={tempFilter.name}
                placeholder="Lọc tên màu sắc . . ."
                className="w-[300px]"
                onChange={(e) => setTempFilter(() => ({ name: e.target.value }))}
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

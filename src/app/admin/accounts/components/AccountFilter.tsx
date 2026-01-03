"use client"

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Combobox from "@/components/Combobox";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import RANKS from "@/consts/ranks";

import type { Dispatch, SetStateAction } from "react";

export interface Filter {
    username: string,
    rank: Rank
}

interface Props {
    setFilter: Dispatch<SetStateAction<Filter>>
}

const ranks = Object.values(RANKS).map(rank => {
    return {
        label: rank.label,
        value: rank.value
    }
});

export default function AccountFilter({ setFilter }: Props) {
    const queryClient = useQueryClient();
    const [tempFilter, setTempFilter] = useState({ username: "", rank: "" as Rank });

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempFilter((state) => {
            return {
                ...state,
                username: e.target.value
            }
        });
    }

    const handleSelectRank = (value: string) => {
        setTempFilter((state) => {
            return {
                ...state,
                rank: value as Rank
            }
        });
    }

    const handleClickFilter = () => {
        setFilter(tempFilter);
        queryClient.invalidateQueries({ queryKey: ["adminAccounts"] });
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <div className="flex gap-[10px]">
                <Input
                    value={tempFilter.username}
                    placeholder="Lọc tên người dùng . . ."
                    className="w-[300px]"
                    onChange={handleChangeName}
                />

                <Combobox
                    options={ranks}
                    value={tempFilter.rank}
                    onSelect={handleSelectRank}
                    placeholder="Lọc thứ hạng"
                />
            </div>

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
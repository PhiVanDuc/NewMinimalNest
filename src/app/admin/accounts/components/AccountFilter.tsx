"use client"

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Combobox from "@/components/Combobox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import ranks from "@/consts/ranks";

import type { Dispatch, SetStateAction } from "react";
import type { AccountFilterDataType } from "@/app/admin/accounts/types";

interface PropsType {
    setFilter: Dispatch<SetStateAction<AccountFilterDataType>>
}

export default function AccountFilter({ setFilter }: PropsType) {
    const queryClient = useQueryClient();
    const [tempFilter, setTempFilter] = useState({
        username: "",
        rank: ""
    });

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
                rank: value
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
                    buttonPlaceholder="Lọc thứ hạng"
                    searchPlaceholder="Tìm kiếm thứ hạng . . ."
                    emptyPlaceholder="Danh sách thứ hạng rỗng."
                    options={Object.values(ranks).map(rank => {
                        return {
                            label: rank.label,
                            value: rank.value
                        }
                    })}
                    option={tempFilter.rank}
                    onSelect={handleSelectRank}
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
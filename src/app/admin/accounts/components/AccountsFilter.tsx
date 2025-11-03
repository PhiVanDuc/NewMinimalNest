"use client"

import Combobox from "@/components/Combobox";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { arrayRanks } from "@/consts/ranks";

export default function AccountsFilter() {
    return (
        <div className="flex items-center justify-between gap-[10px]">
            <div className="flex gap-[10px]">
                <Input
                    placeholder="Lọc tên người dùng . . ."
                    className="w-[300px]"
                />

                <Combobox
                    buttonPlaceholder="Lọc vai trò"
                    searchPlaceholder="Tìm kiếm vai trò . . ."
                    emptyPlaceholder="Danh sách vai trò rỗng."
                    optionList={arrayRanks.map(rank => {
                        return {
                            label: rank.label,
                            value: rank.value
                        }
                    })}
                />
            </div>

            <button
                type="button"
                className="flex items-center justify-center size-[46px] rounded-full bg-theme-main hover:bg-theme-main/95 cursor-pointer"
            >
                <SearchIcon
                    size={20}
                    className="text-white"
                />
            </button>
        </div>
    )
}

"use client"

import { useRouter } from "next/navigation";

import Combobox from "@/components/Combobox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import ranks from "@/consts/ranks";

import type { Dispatch, SetStateAction } from "react";

type FilterType = {
    name: string,
    rank: string
}

interface PropsType {
    filter: FilterType,
    setFilter: Dispatch<SetStateAction<FilterType>>
}

export default function AccountsFilter({ filter, setFilter }: PropsType) {
    const router = useRouter();

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((state) => {
            return {
                ...state,
                name: e.target.value
            }
        });
    }

    const handleChangeRole = (value: string) => {
        setFilter((state) => {
            return {
                ...state,
                rank: value
            }
        });
    }

    const handleClickFilter = () => {
        router.refresh();
    }

    return (
        <div className="flex items-center justify-between gap-[10px]">
            <div className="flex gap-[10px]">
                <Input
                    value={filter.name}
                    placeholder="Lọc tên người dùng . . ."
                    className="w-[300px]"
                    onChange={handleChangeUsername}
                />

                <Combobox
                    buttonPlaceholder="Lọc thứ hạng"
                    searchPlaceholder="Tìm kiếm thứ hạng . . ."
                    emptyPlaceholder="Danh sách thứ hạng rỗng."
                    optionList={Object.values(ranks).map(rank => {
                        return {
                            label: rank.label,
                            value: rank.value
                        }
                    })}
                    value={filter.rank}
                    onChange={handleChangeRole}
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
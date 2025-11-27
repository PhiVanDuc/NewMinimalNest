"use client"

import { useRouter } from "next/navigation";

import Combobox from "@/components/Combobox";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import inventoryStatuses from "@/consts/inventory-statuses";

import type { Dispatch, SetStateAction } from "react";

type FilterType = {
    name: string,
    status: string
}

interface PropsType {
    filter: FilterType,
    setFilter: Dispatch<SetStateAction<FilterType>>
}

export default function InventoryFilter({ filter, setFilter }: PropsType) {
    const router = useRouter();

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((state) => {
            return {
                ...state,
                name: e.target.value
            }
        });
    }

    const handleSelectStatus = (value: string) => {
        setFilter((state) => {
            return {
                ...state,
                status: value
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
                    placeholder="Lọc tên sản phẩm . . ."
                    className="w-[300px]"
                    onChange={handleChangeName}
                />

                <Combobox
                    buttonPlaceholder="Lọc trạng thái"
                    searchPlaceholder="Tìm kiếm trạng thái . . ."
                    emptyPlaceholder="Danh sách trạng thái rỗng."
                    options={Object.values(inventoryStatuses).map(status => {
                        return {
                            label: status.label,
                            value: status.value
                        }
                    })}
                    option={filter.status}
                    onSelect={handleSelectStatus}
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

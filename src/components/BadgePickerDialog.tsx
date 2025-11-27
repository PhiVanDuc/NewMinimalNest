"use client"

import { useEffect, useState, useMemo } from "react";

import Badge from "@/components/Badge";
import DialogBase from "@/components/DialogBase";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

import type { Dispatch, SetStateAction } from "react";

interface BadgeType {
    label: string,
    value: string
}

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    object?: string,
    options: BadgeType[],
    selectedOptions: BadgeType[],
    onSelect?: (badge: BadgeType) => void
}

export default function BadgePickerDialog({
    isOpen,
    setIsOpen,
    object,
    options,
    selectedOptions,
    onSelect
}: PropsType) {
    const [searchText, setSearchText] = useState("");
    const [debouncedSearchText, setDebouncedSearchText] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedSearchText(searchText) }, 500);
        return () => clearTimeout(handler);
    }, [searchText]);

    const filteredOptions = useMemo(() => {
        return options.filter(item =>
            item.label.toLowerCase().includes(debouncedSearchText.toLowerCase())
        )
    }, [options, debouncedSearchText]);

    const handleClick = (badge: BadgeType) => {
        if (onSelect) onSelect(badge)
    }

    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title={`Lựa chọn ${object ? object : "nhãn"}`}
            desc={`Tìm kiếm và lựa chọn ${object ? object : "nhãn"} tại đây.`}
        >
            <div className="px-[20px] space-y-[20px]">
                <Input
                    placeholder={`Lọc tên ${object ? object : "nhãn"} . . .`}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />

                <div className="flex flex-wrap gap-[6px]">
                    {
                        filteredOptions.length === 0 ?
                            (
                                <div className="flex justify-center w-full">
                                    <p className="desc-basic">{object ? String(object).charAt(0).toUpperCase() + String(object).slice(1) : "nhãn"} không tồn tại!</p>
                                </div>
                            ) :
                            filteredOptions.map(badge => {
                                const isActive = selectedOptions.find(option => option.value === badge.value);

                                return (
                                    <Badge
                                        key={badge.value}
                                        variant="outline"
                                        className={cn(
                                            "transition-colors cursor-pointer",
                                            isActive ? "bg-zinc-100 border-zinc-100" : "bg-white hover:bg-zinc-100 hover:border-zinc-100"
                                        )}
                                        onClick={() => { handleClick(badge) }}
                                    >
                                        <p>{badge.label}</p>
                                    </Badge>
                                )
                            })
                    }
                </div>
            </div>
        </DialogBase>
    )
}
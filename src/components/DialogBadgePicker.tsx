"use client"

import { useEffect, useState, useMemo } from "react";

import Badge from "@/components/Badge";

import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { cn } from "@/libs/utils";

import type { Dispatch, SetStateAction } from "react";

interface BadgeType {
    label: string,
    value: string
}

interface Props {
    open: boolean,
    onOpenChange: Dispatch<SetStateAction<boolean>>,
    badges: BadgeType[],
    values: string[],
    onSelect: (value: string) => void,
    object?: string
}

export default function BadgePickerDialog({ open, onOpenChange, badges, values, onSelect, object }: Props) {
    const [searchText, setSearchText] = useState("");
    const [debouncedSearchText, setDebouncedSearchText] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedSearchText(searchText) }, 500);
        return () => clearTimeout(handler);
    }, [searchText]);

    const filteredBadges = useMemo(() => {
        return badges.filter(badge =>
            badge.label.toLowerCase().includes(debouncedSearchText.toLowerCase())
        )
    }, [badges, debouncedSearchText]);

    const handleClick = (value: string) => onSelect(value);

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Lựa chọn {object}</DialogTitle>
                    <DialogDescription>Tìm kiếm và lựa chọn {object} tại đây.</DialogDescription>
                </DialogHeader>

                <div className="px-[20px] space-y-[20px]">
                    <Input
                        placeholder={`Lọc tên ${object ? object : "nhãn"} . . .`}
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />

                    <div className="flex flex-wrap gap-[6px]">
                        {
                            filteredBadges.length === 0 ?
                                (
                                    <div className="flex justify-center w-full">
                                        <p className="desc-basic">{object ? String(object).charAt(0).toUpperCase() + String(object).slice(1) : "nhãn"} không tồn tại!</p>
                                    </div>
                                ) :
                                filteredBadges.map(badge => {
                                    const isActive = values.find(value => badge.value === value);

                                    return (
                                        <Badge
                                            key={badge.value}
                                            variant="outline"
                                            className={cn(
                                                "transition-colors cursor-pointer",
                                                isActive ? "bg-zinc-100 border-zinc-100" : "bg-white hover:bg-zinc-100 hover:border-zinc-100"
                                            )}
                                            onClick={() => handleClick(badge.value)}
                                        >
                                            <p>{badge.label}</p>
                                        </Badge>
                                    )
                                })
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
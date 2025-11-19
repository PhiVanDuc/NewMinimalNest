"use client"

import { useEffect, useState, useMemo } from "react";

import Badge from "@/components/Badge";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

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
    title?: string,
    desc?: string,
    placeholder?: string,
    emptyPlaceholder?: string
    data: BadgeType[],
    selectedData: BadgeType[],
    onClickBadge?: (badge: BadgeType) => void
}

export default function BadgeSelectorDialog({
    isOpen,
    setIsOpen,
    title,
    desc,
    placeholder,
    emptyPlaceholder,
    data,
    selectedData,
    onClickBadge
}: PropsType) {
    const [searchText, setSearchText] = useState("");
    const [debouncedSearchText, setDebouncedSearchText] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedSearchText(searchText) }, 500);
        return () => clearTimeout(handler);
    }, [searchText]);

    const filteredBadges = useMemo(() => {
        return data.filter(item =>
            item.label.toLowerCase().includes(debouncedSearchText.toLowerCase())
        )
    }, [data, debouncedSearchText]);

    const handleClick = (badge: BadgeType) => {
        if (onClickBadge) onClickBadge(badge)
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title ? title : "Lựa chọn nhãn"}
                    </DialogTitle>

                    <DialogDescription>
                        {desc ? desc : "Tìm kiếm và lựa chọn nhãn tại đây."}
                    </DialogDescription>
                </DialogHeader>

                <div className="px-[20px] space-y-[20px]">
                    <Input
                        placeholder={placeholder ? placeholder : "Lọc tên nhãn . . ."}
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />

                    <div className="flex flex-wrap gap-[6px]">
                        {
                            filteredBadges.length === 0 ?
                                (
                                    <div className="flex justify-center w-full">
                                        <p className="desc-basic">
                                            {emptyPlaceholder ? emptyPlaceholder : "Nhãn không tồn tại!"}
                                        </p>
                                    </div>
                                ) :
                                filteredBadges.map(badge => {
                                    const isActive = selectedData.find(item => item.value === badge.value);

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
            </DialogContent>
        </Dialog>
    )
}
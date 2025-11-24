"use client"

import DialogBase from "@/components/DialogBase";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function InventoryExcelResultDialog({ isOpen, setIsOpen }: PropsType) {
    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title=""
            desc=""
        >
            <div className="flex-1 px-[20px] overflow-y-auto">
                <div className="h-[2000px]"></div>
            </div>
        </DialogBase>
    )
}

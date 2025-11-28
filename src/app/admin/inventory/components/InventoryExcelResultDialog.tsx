"use client"

import DialogBase from "@/components/DialogBase";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    resultType: "overwrite" | "increase" | "decrease"
}

export default function InventoryExcelResultDialog({ isOpen, setIsOpen, resultType }: PropsType) {
    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title={
                `Kết quả
                ${resultType === "overwrite" ? "ghi đè tồn kho" :
                    resultType === "increase" ? "tăng tồn kho" :
                        resultType === "decrease" && "giảm tồn kho"}`
            }
            desc={
                `Các danh sách dưới đây là kết quả sau quá trình 
                ${resultType === "overwrite" ? "ghi đè tồn kho." :
                    resultType === "increase" ? "tăng tồn kho." :
                        resultType === "decrease" && "giảm tồn kho."
                }
            `}
        >
            <div className="flex-1 px-[20px] overflow-y-auto">
                <div className="h-[2000px]"></div>
            </div>
        </DialogBase>
    )
}

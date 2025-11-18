"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PaymentAddressesDialog({ isOpen, setIsOpen }: PropsType) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent
                className="max-h-[85dvh]"
            >
                <DialogHeader>
                    <DialogTitle>Đổi địa chỉ</DialogTitle>
                    <DialogDescription>Vui lòng chọn địa chỉ bạn muốn sử dụng cho thanh toán.</DialogDescription>
                </DialogHeader>

                <div className="flex-1 px-[20px] space-y-[10px] overflow-y-auto">
                    {
                        Array.from({ length: 3 }).map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-[15px] bg-zinc-50 hover:bg-zinc-100 rounded-[10px] border border-transparent hover:border-zinc-300 transition-colors cursor-pointer"
                                    onClick={() => { setIsOpen(false); }}
                                >
                                    <div className="space-y-[10px]">
                                        <p
                                            className={cn(
                                                "text-[14px] font-medium capitalize truncate-1",
                                                "sm:text-[15px]"
                                            )}
                                        >
                                            Tên người mua
                                        </p>

                                        <div>
                                            <p className="desc-basic">+84328895451</p>
                                            <p className="desc-basic truncate-2">Chi tiết địa chỉ của người mua . . .</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}
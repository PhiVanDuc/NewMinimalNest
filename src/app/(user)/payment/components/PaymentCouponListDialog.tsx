"use client"

import { Dispatch, SetStateAction } from "react";
import Coupon from "@/components/Coupon";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PaymentCouponListDialog({ isOpen, setIsOpen }: PropsType) {
    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent
                className="flex flex-col gap-[30px] px-0 max-h-[85dvh] border-zinc-300"
            >
                <DialogHeader className="px-[20px]">
                    <DialogTitle className="text-zinc-700">Chọn phiếu giảm giá</DialogTitle>
                    <DialogDescription className="!desc-basic">Vui lòng chọn phiếu giảm giá bạn muốn sử dụng cho đơn hàng này.</DialogDescription>
                </DialogHeader>

                <div className="flex-1 px-[20px] space-y-[10px] overflow-y-auto">
                    <p className="desc-basic">Các phiếu giảm giá có thể sử dụng</p>

                    <div className="space-y-[10px]">
                        {
                            Array.from({ length: 5 }).map((_, index) => {
                                return <Coupon key={index} isDesc={false} />
                            })
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

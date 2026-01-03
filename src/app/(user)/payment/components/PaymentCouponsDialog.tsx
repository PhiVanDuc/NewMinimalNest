"use client"

import Coupon from "@/components/Coupon";
import DialogBase from "@/components/DialogBase";

import type { Dispatch, SetStateAction } from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PaymentCouponsDialog({ isOpen, setIsOpen }: Props) {
    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Chọn phiếu giảm giá"
            desc="Vui lòng chọn phiếu giảm giá bạn muốn sử dụng cho đơn hàng này."
        >
            <div className="flex-1 px-[20px] space-y-[10px] overflow-y-auto">
                <p className="desc-basic">Các phiếu giảm giá có thể sử dụng</p>

                <div className="space-y-[10px]">
                    {
                        Array.from({ length: 10 }).map((_, index) => {
                            return <Coupon key={index} isDesc={false} />
                        })
                    }
                </div>
            </div>
        </DialogBase>
    )
}

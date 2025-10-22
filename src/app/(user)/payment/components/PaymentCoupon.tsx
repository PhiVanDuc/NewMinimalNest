"use client"

import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

import { IoReloadOutline } from "react-icons/io5";

export default function PaymentCoupon() {
    return (
        <div className='space-y-[20px]'>
            <header>
                <h2 className="sub-header-basic">Phiếu giảm giá</h2>
                <p className="desc-basic">Chọn phiếu giảm giá để sử dụng cho đơn hàng này.</p>
            </header>

            <div className="flex items-stretch gap-[15px]">
                <span className="self-stretch shrink-0 my-[4px] w-[3px] rounded-full bg-theme-main" />

                <div className="flex items-start justify-between w-full">
                    <div className="space-y-[12px]">
                        <Badge>
                            Khách hàng mới
                        </Badge>

                        <div>
                            <p className="header-basic text-theme-main">- 10%</p>
                            <p className="desc-basic truncate-2">Mô tả chi tiết về phiếu giảm giá . . .</p>
                        </div>
                    </div>

                    <Button className="shrink-0 bg-zinc-100 hover:bg-zinc-200 text-zinc-700">
                        <IoReloadOutline />
                        <span className="hidden sm:inline-block">Đổi phiếu</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

"use client"

import { useState } from "react";

import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

import dynamic from "next/dynamic";
const PaymentCouponDialog = dynamic(() => import("@/app/(user)/payment/components/PaymentCouponDialog"));

import { IoReloadOutline } from "react-icons/io5";
import { RiCoupon5Fill } from "react-icons/ri";

import { cn } from "@/lib/utils";

export default function PaymentCoupon() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

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

                    <Button
                        className="shrink-0 bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                        onClick={() => { setIsOpenDialog(true); }}
                    >
                        <IoReloadOutline />
                        <span className="hidden sm:inline-block">Đổi phiếu giảm giá</span>
                    </Button>
                </div>
            </div>

            {/* <div className="p-[15px] bg-zinc-100 rounded-[10px] space-y-[15px]">
                <div className="space-y-[2px]">
                    <p
                        className={cn(
                            "text-[14px] font-medium truncate-1",
                            "sm:text-[15px]"
                        )}
                    >
                        Chưa chọn phiếu giảm giá
                    </p>

                    <p className="desc-basic">Đừng bỏ lỡ ưu đãi! Chọn ngay phiếu giảm giá để nhận khuyến mãi tốt nhất.</p>
                </div>

                <Button>
                    <RiCoupon5Fill />
                    Chọn phiếu giảm giá
                </Button>
            </div> */}

            {isOpenDialog && <PaymentCouponDialog isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />}
        </div>
    )
}

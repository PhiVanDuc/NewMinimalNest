"use client"

import Badge from "@/components/Badge";

interface PropsType {
    isDesc?: boolean
}

export default function Coupon({ isDesc = true }: PropsType) {
    return (
        <div className="relative">
            <span
                className="absolute bg-black size-[30px] right-[-8px] top-[35px] cursor-pointer"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 100%)"
                }}
            />

            <div className="relative p-[15px] bg-zinc-50 rounded-[10px] border border-transparent hover:border-zinc-300 transition-colors cursor-pointer">
                <div className="space-y-[10px]">
                    <div className="space-y-[2px]">
                        <p className="text-[14px] text-zinc-800 font-medium capitalize truncate-1">
                            Tên phiếu giảm giá
                        </p>

                        <Badge className="sm:!text-[12px]">
                            <p>Khách hàng mới</p>
                        </Badge>
                    </div>

                    <div className="space-y-[2px]">
                        <p className="sub-header-basic text-theme-main">- 10%</p>
                        {isDesc && <p className="desc-basic !text-[14px]">Đây là mô tả cơ bản về phiếu giảm giá . . .</p>}
                    </div>
                </div>
            </div>

            <p className="absolute top-[10px] right-[-8px] px-[8px] py-[4px] bg-zinc-800 rounded-tl-full rounded-bl-full text-[12px] text-white font-medium cursor-pointer">+99 phiếu</p>
        </div>
    )
}
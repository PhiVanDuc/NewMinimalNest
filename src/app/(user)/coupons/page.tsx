import { Suspense } from "react";

import Header from "@/components/Header";
import Coupons from "@/app/(user)/coupons/Coupons";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Phiếu giảm giá</h1>
                <p className="desc-basic">Khám phá các phiếu giảm giá hiện có và tận dụng ưu đãi từ <span className="font-medium text-theme-main">Minimal Nest</span>.</p>
            </Header>

            <Suspense fallback={null}><Coupons /></Suspense>
        </div>
    )
}
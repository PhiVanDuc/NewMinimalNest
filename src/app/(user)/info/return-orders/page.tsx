"use client"

import Header from "@/components/Header";
import ReturnOrder from "@/app/(user)/info/return-orders/ReturnOrder";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <Header>
                <h1 className="header-basic">Đơn hoàn trả</h1>
                <p className="desc-basic">Theo dõi và quản lý các đơn hoàn trả của bạn. Sau khi đã xác nhận, đơn hoàn trả sẽ không thể huỷ nữa.</p>
            </Header>

            <ul className="space-y-[20px]">
                <li><ReturnOrder /></li>
                <li><ReturnOrder /></li>
                <li><ReturnOrder /></li>
            </ul>
        </div>
    )
}

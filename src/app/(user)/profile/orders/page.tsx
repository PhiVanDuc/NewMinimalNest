"use client"

import Header from "@/components/Header";
import Order from "@/app/(user)/info/orders/Order";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <Header>
                <h1 className="header-basic">Đơn hàng</h1>
                <p className="desc-basic">Theo dõi và quản lý các đơn hàng của bạn. Sau khi đã đóng gói xong, đơn hàng sẽ không thể huỷ nữa.</p>
            </Header>

            <ul className="space-y-[20px]">
                <li><Order /></li>
                <li><Order /></li>
                <li><Order /></li>
            </ul>
        </div>
    )
}

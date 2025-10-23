"use client"

import Order from "@/app/(user)/info/orders/components/Order";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <header>
                <h1 className="header-basic">Đơn hàng</h1>
                <p className="desc-basic">Theo dõi và quản lý các đơn hàng của bạn. Sau khi đã đóng gói xong, đơn hàng sẽ không thể huỷ nữa.</p>
            </header>

            <div className="space-y-[20px]">
                <Order />
                <Order />
                <Order />
            </div>
        </div>
    )
}

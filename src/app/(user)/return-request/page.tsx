"use client"

import Header from "@/components/Header";
import ReturnOrder from "@/app/(user)/return-request/ReturnableOrder";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Hoàn trả</h1>
                <p className="desc-basic">Chọn đơn hàng mà bạn muốn hoàn trả. Sau khi gửi yêu cầu, chúng tôi sẽ kiểm tra và xác nhận thông tin hoàn trả.</p>
            </Header>

            <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-[20px]">
                <li><ReturnOrder /></li>
                <li><ReturnOrder /></li>
            </ul>
        </div>
    )
}

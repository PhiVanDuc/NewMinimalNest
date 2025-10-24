"use client"

import Address from "@/app/(user)/info/book-address/components/Address";
import AddressAddButton from "@/app/(user)/info/book-address/components/AddressAddButton";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <header>
                <h1 className="header-basic">Sổ địa chỉ</h1>
                <p className="desc-basic">Quản lý, thêm mới hoặc chỉnh sửa các địa chỉ giao hàng của bạn.</p>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <li><Address /></li>
                <li><AddressAddButton /></li>
            </ul>
        </div>
    )
}

"use client"

import Address from "@/app/(user)/info/components/Address";
import AddressAddButton from "@/app/(user)/info/components/AddressAddButton";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <header>
                <h1 className="header-basic">Sổ địa chỉ</h1>
                <p className="desc-basic">Quản lý, thêm mới hoặc chỉnh sửa các địa chỉ giao hàng của bạn.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <Address />
                <AddressAddButton />
            </div>
        </div>
    )
}

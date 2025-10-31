"use client"

import Header from "@/components/Header";
import Address from "@/app/(user)/info/book-address/components/Address";
import AddressButtonAdd from "@/app/(user)/info/book-address/components/AddressButtonAdd";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <Header>
                <h1 className="header-basic">Sổ địa chỉ</h1>
                <p className="desc-basic">Quản lý, thêm mới hoặc chỉnh sửa các địa chỉ giao hàng của bạn.</p>
            </Header>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <li><Address /></li>
                <li><AddressButtonAdd /></li>
            </ul>
        </div>
    )
}

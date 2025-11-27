"use client"

import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Banner from "@/app/admin/banners/components/Banner";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý banner</h1>
                <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá banner tại đây.</p>
            </Header>

            <div className="space-y-[20px]">
                <Banner />
                <Banner />
                <Banner />
                <Banner />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}

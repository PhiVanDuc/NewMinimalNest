"use client"

import Header from "@/components/Header";
import ColorForm from "@/app/admin/colors/components/ColorForm";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm màu sắc</h1>
                <p className="desc-basic">Vui lòng thêm màu sắc tại đây.</p>
            </Header>

            <ColorForm formType="add" />
        </div>
    )
}
"use client"

import Header from "@/components/Header";
import CategoryForm from "@/app/admin/categories/components/CategoryForm";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm danh mục</h1>
                <p className="desc-basic">Vui lòng thêm danh mục tại đây.</p>
            </Header>

            <CategoryForm formType="add" />
        </div>
    )
}

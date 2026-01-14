"use client"

import Header from "@/components/Header";
import ProductForm from "@/app/admin/products/components/form/ProductForm";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm sản phẩm</h1>
                <p className="desc-basic">Vui lòng Thêm sản phẩm tại đây.</p>
            </Header>

            <ProductForm formType="add" />
        </div>
    )
}

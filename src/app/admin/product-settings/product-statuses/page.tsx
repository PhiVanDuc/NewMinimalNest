"use client"

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";

import productStatusesColumns from "@/app/admin/product-settings/product-statuses/product-statuses-columns";

export default function ProductGroupsClient() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Gán trạng thái sản phẩm</h1>
                <p className="desc-basic">Xem danh sách và gán trạng thái cho sản phẩm tại đây.</p>
            </Header>

            <DataTable
                data={[1, 2, 3, 4]}
                columns={productStatusesColumns}
            />
        </div>
    )
}
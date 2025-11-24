"use client"

import { useState } from "react";

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import InventoryFilter from "@/app/admin/inventory/components/InventoryFilter";
import InventoryExcelButton from "@/app/admin/inventory/components/InventoryExcelButton";

import inventoryColumns from "@/app/admin/inventory/inventory-columns";

export default function Page() {
    const [filter, setFilter] = useState({
        name: "",
        status: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý tồn kho</h1>
                    <p className="desc-basic">Xem danh sách, thống kê, cập nhật tồn kho tại đây.</p>
                </Header>

                <InventoryExcelButton />
            </div>

            <div className="space-y-[10px]">
                <InventoryFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={inventoryColumns}
                />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}
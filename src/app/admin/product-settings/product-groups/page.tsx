"use client"

import { useState } from "react";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import ProductGroupsFilter from "@/app/admin/product-settings/product-groups/components/ProductGroupsFilter";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import productGroupsColumns from "@/app/admin/product-settings/product-groups/product-groups-columns";

export default function ProductGroupsClient() {
    const [filter, setFilter] = useState({
        name: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý nhóm sản phẩm</h1>
                    <p className="desc-basic">Quản lý, xem, cập nhật và xoá nhóm sản phẩm tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/product-settings/product-groups/add">
                        <FaPlus />
                        Thêm nhóm sản phẩm
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">
                <ProductGroupsFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={productGroupsColumns}
                />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}
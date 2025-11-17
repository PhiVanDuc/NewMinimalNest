"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

import productGroupsColumns from "@/app/admin/product-groups/product-groups-columns";

export default function ProductGroupsClient() {
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
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
                    <Link href="/admin/products/add">
                        <FiPlus />
                        Thêm nhóm sản phẩm
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={productGroupsColumns}
                />
            </div>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
            />
        </div>
    )
}
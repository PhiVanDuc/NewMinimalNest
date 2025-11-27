"use client"

import { useState } from "react";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import ProductsFilter from "@/app/admin/products/components/ProductsFilter";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import productsColumns from "@/app/admin/products/products-columns";

export default function Page() {
    const [filter, setFilter] = useState({
        name: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý sản phẩm</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá sản phẩm tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/products/add">
                        <FaPlus />
                        Thêm sản phẩm
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">
                <ProductsFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={productsColumns}
                />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}
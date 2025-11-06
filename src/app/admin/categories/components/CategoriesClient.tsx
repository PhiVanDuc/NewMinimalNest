"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import CategoriesFilter from "@/app/admin/categories/components/CategoriesFilter";

import categoriesColumns from "@/app/admin/categories/categories-columns";

export default function CategoriesClient() {
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        categoryName: ""
    });

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý danh mục</h1>
                <p className="desc-basic">Quản lý, xem, cập nhật và xoá danh mục tại đây.</p>
            </Header>

            <div className="space-y-[10px]">
                <CategoriesFilter
                    filters={filters}
                    setFilters={setFilters}
                />

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={categoriesColumns}
                />
            </div>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
            />
        </div>
    )
}

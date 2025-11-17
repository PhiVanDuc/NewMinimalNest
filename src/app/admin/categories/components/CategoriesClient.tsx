"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import CategoriesFilter from "@/app/admin/categories/components/CategoriesFilter";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

import categoriesColumns from "@/app/admin/categories/categories-columns";

export default function CategoriesClient() {
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        name: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý danh mục</h1>
                    <p className="desc-basic">Quản lý, xem, cập nhật và xoá danh mục tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/categories/add">
                        <FiPlus />
                        Thêm danh mục
                    </Link>
                </Button>
            </div>

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

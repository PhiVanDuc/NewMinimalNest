"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import ColorsFilter from "@/app/admin/colors/components/ColorsFilter";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

import colorsColumns from "@/app/admin/colors/colors-columns";

export default function ColorsClient() {
    const searchParams = useSearchParams();

    const [filter, setFilter] = useState({
        name: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý màu sắc</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá màu sắc tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/colors/add">
                        <FiPlus />
                        Thêm màu sắc
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">
                <ColorsFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1, 2, 3, 4]}
                    columns={colorsColumns}
                />
            </div>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
            />
        </div>
    )
}

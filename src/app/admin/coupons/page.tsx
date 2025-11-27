"use client"

import { useState } from "react";

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import CouponsFilter from "./components/CouponsFilter";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

import couponsColumns from "@/app/admin/coupons/coupons-columns";

export default function Page() {
    const [filter, setFilter] = useState({
        name: "",
        status: ""
    });

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý phiếu giảm giá</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá phiếu giảm giá tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/coupons/add">
                        <FiPlus />
                        Thêm phiếu giảm giá
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">
                <CouponsFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1, 2, 3, 4, 5]}
                    columns={couponsColumns}
                />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}
"use client"

import Link from "next/link";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import DiscountsColumns from "@/app/admin/product-settings/discounts/discounts-columns";

export default function ProductGroupsClient() {
    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý giảm giá</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá giảm giá tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/product-settings/discounts/add">
                        <FaPlus />
                        Thêm giảm giá
                    </Link>
                </Button>
            </div>

            <DataTable
                data={[1, 2, 3, 4]}
                columns={DiscountsColumns}
            />
        </div>
    )
}
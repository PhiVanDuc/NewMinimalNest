"use client"

import Link from "next/link";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Banner from "@/app/admin/banners/components/Banner";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý banner</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá banner tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/banners/add">
                        <FaPlus />
                        Thêm danh mục
                    </Link>
                </Button>
            </div>

            <div className="space-y-[20px]">
                <Banner bannerType="product" />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}

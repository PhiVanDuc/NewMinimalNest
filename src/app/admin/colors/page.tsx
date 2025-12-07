"use client"

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Error from "@/components/Error";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import ColorsFilter from "@/app/admin/colors/components/ColorsFilter";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import { adminGetColors } from "@/services/admin-color";
import colorsColumns from "@/app/admin/colors/colors-columns";

export default function Page() {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || "1";

    const query = useQuery({
        queryKey: ["adminColors", { page }],
        queryFn: () => adminGetColors(page)
    });

    const isLoading = query.isLoading;
    const isError = query.isError || !query.data?.success;

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
                        <FaPlus />
                        Thêm màu sắc
                    </Link>
                </Button>
            </div>

            <div className="space-y-[10px]">
                <ColorsFilter />

                {
                    (!isLoading && isError) ? <Error /> :
                        (
                            <DataTable
                                data={query.data?.data?.colors || []}
                                columns={colorsColumns}
                                isLoading={isLoading}
                            />
                        )
                }
            </div>

            {
                (!isLoading && !isError) &&
                (
                    <Pagination
                        totalPage="10"
                    />
                )
            }
        </div>
    )
}

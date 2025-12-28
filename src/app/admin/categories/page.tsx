"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { Suspense } from "react";
import Error from "@/components/Error";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/app/admin/categories/components/CategoryFilter";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import { adminGetCategories } from "@/services/categories/admin";
import categoryColumns from "@/app/admin/categories/category-columns";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";

function PageContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState({ name: "" });

    const page = searchParams.get("page") || "1";
    const isValidPage = isPositiveIntegerString(page);

    const query = useQuery({
        queryKey: ["adminCategories", { page, filter }],
        queryFn: () => adminGetCategories(page, filter),
        enabled: isValidPage
    });

    const isLoading = query.isPending;
    const isError = query.isError || query.data?.success === false;
    const totalPage = query.data?.data?.totalPage || "1";
    
    return (
        <div className="space-y-[40px]">
            <div className="flex items-center justify-between">
                <Header>
                    <h1 className="header-basic">Quản lý danh mục</h1>
                    <p className="desc-basic">Xem danh sách, thêm, cập nhật và xoá danh mục tại đây.</p>
                </Header>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    asChild
                >
                    <Link href="/admin/categories/add">
                        <FaPlus />
                        Thêm danh mục
                    </Link>
                </Button>
            </div>

            {
                isError ? <Error /> :
                (
                    <div className="space-y-[10px]">
                        <CategoryFilter setFilter={setFilter} />
                        <DataTable
                            data={query.data?.data?.categories || []}
                            columns={categoryColumns}
                            isLoading={isLoading}
                        />
                    </div>
                )
            }

            {(!isLoading && !isError) && (<Pagination totalPage={totalPage} />)}
        </div>
    )
}

export default function Page() {
    return (
        <Suspense fallback="">
            <PageContent />
        </Suspense>
    )
}
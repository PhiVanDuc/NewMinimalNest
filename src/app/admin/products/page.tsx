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
import ProductFilter from "@/app/admin/products/components/ProductFilter";

import { Button } from "@/components/ui/button";

import { FaPlus } from "react-icons/fa6";

import { adminGetProducts } from "@/services/products/admin";
import productColumns from "@/app/admin/products/product-columns";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";

function PageContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState({ name: "" });

    const page = searchParams.get("page") || "1";
    const isValidPage = isPositiveIntegerString(page);

    const query = useQuery({
        queryKey: ["adminProducts", { page, filter }],
        queryFn: () => adminGetProducts({ page, filter }),
        enabled: isValidPage
    });

    const isLoading = query.isPending;
    const isError = query.isError || query.data?.success === false;
    const products = query.data?.data?.products || []
    const totalPage = query.data?.data?.totalPage || "1";

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
            
            {
                isError ? <Error /> :
                (
                    <div className="space-y-[10px]">
                        <ProductFilter setFilter={setFilter} />
                        <DataTable
                            data={products}
                            columns={productColumns}
                            isLoading={isLoading}
                        />
                    </div>
                )
            }

            <Pagination totalPage={totalPage} />
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
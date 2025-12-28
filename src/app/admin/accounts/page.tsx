"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";
import Error from "@/components/Error";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import AccountFilter from "@/app/admin/accounts/components/AccountFilter";

import { adminGetAccounts } from "@/services/accounts/admin";
import accountColumns from "@/app/admin/accounts/account-columns";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";

function PageContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState({
        username: "",
        rank: ""
    });

    const page = searchParams.get("page") || "1";
    const isValidPage = isPositiveIntegerString(page);

    const query = useQuery({
        queryKey: ["adminAccounts", { page, filter }],
        queryFn: () => adminGetAccounts(page, filter),
        enabled: isValidPage
    });

    const isLoading = query.isPending;
    const isError = query.isError || query.data?.success === false;
    const totalPage = query.data?.data?.totalPage || "1";

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý tài khoản</h1>
                <p className="desc-basic">Xem danh sách và phân quyền tài khoản người dùng tại đây.</p>
            </Header>

            {
                isError ? <Error /> :
                (
                    <div className="space-y-[10px]">
                        <AccountFilter setFilter={setFilter} />
                        <DataTable
                            data={query.data?.data?.accounts || []}
                            columns={accountColumns}
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
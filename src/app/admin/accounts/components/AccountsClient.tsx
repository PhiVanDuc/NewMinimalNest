"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import AccountsFilter from "@/app/admin/accounts/components/AccountsFilter";

import accountsColumns from "@/app/admin/accounts/accounts-columns";

export default function AccountsClient() {
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState({
        username: "",
        rank: ""
    });

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý tài khoản</h1>
                <p className="desc-basic">Quản lý, xem và phân quyền tài khoản người dùng tại đây.</p>
            </Header>

            <div className="space-y-[10px]">
                <AccountsFilter
                    filters={filters}
                    setFilters={setFilters}
                />

                <DataTable
                    data={[1]}
                    columns={accountsColumns}
                />
            </div>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
            />
        </div>
    )
}

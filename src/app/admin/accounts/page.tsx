"use client"

import { useState } from "react";

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";
import AccountsFilter from "@/app/admin/accounts/components/AccountsFilter";

import accountsColumns from "@/app/admin/accounts/accounts-columns";

export default function Page() {
    const [filter, setFilter] = useState({
        name: "",
        rank: ""
    });

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý tài khoản</h1>
                <p className="desc-basic">Xem danh sách và phân quyền tài khoản người dùng tại đây.</p>
            </Header>

            <div className="space-y-[10px]">
                <AccountsFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <DataTable
                    data={[1]}
                    columns={accountsColumns}
                />
            </div>

            <Pagination
                totalPage="10"
            />
        </div>
    )
}

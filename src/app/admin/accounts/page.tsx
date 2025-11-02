"use client"

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";

import accountColumns from "@/app/admin/accounts/account-columns";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý tài khoản</h1>
                <p className="desc-basic">Quản lý, xem và phân quyền tài khoản người dùng tại đây.</p>
            </Header>

            <div className="space-y-[20px]">
                <DataTable
                    data={[1]}
                    columns={accountColumns}
                />
            </div>
        </div>
    )
}
"use client"

import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Pagination from "@/components/Pagination";

import { Input } from "@/components/ui/input";

import accountColumns from "@/app/admin/accounts/account-columns";

export default function Page() {
    const searchParams = useSearchParams();

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Quản lý tài khoản</h1>
                <p className="desc-basic">Quản lý, xem và phân quyền tài khoản người dùng tại đây.</p>
            </Header>

            <div className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <div>
                        <Input
                            placeholder="Lọc tên người dùng . . ."
                            className="w-[300px]"
                        />


                    </div>
                </div>

                <DataTable
                    data={[1]}
                    columns={accountColumns}
                />
            </div>

            <Pagination
                page={searchParams.get("page") || "1"}
                totalPage="10"
            />
        </div>
    )
}
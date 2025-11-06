"use client"

import AccountsRoleColumn from "@/app/admin/accounts/components/AccountsRoleColumn";
import { PiMedalFill } from "react-icons/pi";

import { ColumnDef } from "@tanstack/react-table";
import ranks from "@/consts/ranks";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const accountsColumns: ColumnDef<number>[] = [
    {
        accessorKey: "account",
        header: () => <h3 className={headerClassName}>Tài khoản</h3>,
        cell: () => {
            return (
                <div className="flex items-center gap-[15px]">
                    <div className="size-[45px] aspect-square rounded-full bg-zinc-300" />

                    <div className="w-full text-start leading-tight space-y-[4px] overflow-hidden">
                        <p className="header-table-row">Tên người dùng</p>
                        <p className="desc-table-row">example@gmail.com</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "rank",
        header: () => <h3 className={headerClassName}>Thứ hạng</h3>,
        cell: () => {
            return (
                <div className="flex items-center gap-[10px]">
                    <PiMedalFill
                        size={25}
                        style={{
                            color: ranks["khach-super-vip"].color
                        }}
                    />

                    <p className="content-table-row">{ranks["khach-super-vip"].label}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "role",
        header: () => <h3 className={headerClassName}>Vai trò</h3>,
        cell: () => {
            return (
                <AccountsRoleColumn />
            )
        }
    },
    {
        accessorKey: "dateJoined",
        header: () => <h3 className={headerClassName}>Ngày tham gia</h3>,
        cell: () => {
            return (
                <p className="content-table-row">20 Tháng 10 2024</p>
            )
        }
    }
];

export default accountsColumns;
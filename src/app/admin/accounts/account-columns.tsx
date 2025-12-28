"use client"

import Avatar from "@/components/Avatar";
import AccountRoleColumn from "@/app/admin/accounts/components/AccountRoleColumn";

import { PiMedalFill } from "react-icons/pi";

import ranks from "@/consts/ranks";

import type { ColumnDef } from "@tanstack/react-table";
import type { AccountDataType } from "@/app/admin/accounts/types";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const accountColumns: ColumnDef<AccountDataType>[] = [
    {
        accessorKey: "account",
        header: () => <h3 className={headerClassName}>Tài khoản</h3>,
        cell: ({ row }) => {
            const { username, email } = row.original;

            return (
                <div className="flex items-center gap-[15px]">
                    <Avatar username={username}/>

                    <div className="w-full text-start leading-tight space-y-[4px] overflow-hidden">
                        <p className="header-table-row">{username}</p>
                        <p className="desc-table-row">{email}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "rank",
        header: () => <h3 className={headerClassName}>Thứ hạng</h3>,
        cell: ({ row }) => {
            const { rank } = row.original;

            return (
                <div className="flex items-center gap-[10px]">
                    <PiMedalFill
                        size={25}
                        style={{ color: ranks[rank].colorCode }}
                    />

                    <p className="content-table-row">{ranks[rank].label}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "role",
        header: () => <h3 className={headerClassName}>Vai trò</h3>,
        cell: ({ row }) => {
            const { role } = row.original;

            return <AccountRoleColumn role={role} />
        }
    },
    {
        accessorKey: "provider",
        header: () => <h3 className={headerClassName}>Loại tài khoản</h3>,
        cell: ({ row }) => {
            const { provider } = row.original;

            return (
                <p className="caplizalize content-table-row">
                    {provider}
                </p>
            )
        }
    }
];

export default accountColumns;
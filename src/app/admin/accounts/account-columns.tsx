"use client"

import Avatar from "@/components/Avatar";
import AccountRoleColumn from "@/app/admin/accounts/components/AccountRoleColumn";

import { PiMedalFill } from "react-icons/pi";

import RANKS from "@/consts/ranks";
import PROVIDERS from "@/consts/providers";

import type { ColumnDef } from "@tanstack/react-table";

const accountColumns: ColumnDef<Account>[] = [
    {
        accessorKey: "account",
        header: () => <h3 className="header-table">Tài khoản</h3>,
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
        header: () => <h3 className="header-table">Thứ hạng</h3>,
        cell: ({ row }) => {
            const { rank } = row.original;

            return (
                <div className="flex items-center gap-[10px]">
                    <PiMedalFill
                        size={25}
                        style={{ color: RANKS[rank].colorCode }}
                    />

                    <p className="content-table-row">{RANKS[rank].label}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "role",
        header: () => <h3 className="header-table">Vai trò</h3>,
        cell: ({ row }) => {
            const { id, role } = row.original;
            return <AccountRoleColumn key={id} id={id} role={role} />
        }
    },
    {
        accessorKey: "provider",
        header: () => <h3 className="header-table">Loại tài khoản</h3>,
        cell: ({ row }) => {
            const { provider } = row.original;
            return <p className="content-table-row">{PROVIDERS[provider].label}</p>
        }
    }
];

export default accountColumns;
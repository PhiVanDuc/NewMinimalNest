"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { PiMedalFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import { ColumnDef } from "@tanstack/react-table";
import ranks from "@/consts/ranks";
import Link from "next/link";

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
        header: () => <h3 className={headerClassName}>Loại khách hàng</h3>,
        cell: () => {
            return (
                <div className="flex items-center gap-[10px]">
                    <PiMedalFill
                        size={25}
                        style={{
                            color: ranks.dong.color
                        }}
                    />

                    <p className="content-table-row">{ranks.dong.label}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "role",
        header: () => <h3 className={headerClassName}>Vai trò</h3>,
        cell: () => {
            return (
                <p className="content-table-row">Khách hàng</p>
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
    },
    {
        accessorKey: "actions",
        header: () => <h3 className={headerClassName + " text-center"}>Hành động</h3>,
        cell: () => {
            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                                <HiDotsVertical
                                    size={18}
                                    className="text-zinc-700"
                                />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/accounts/account-id">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default accountsColumns;
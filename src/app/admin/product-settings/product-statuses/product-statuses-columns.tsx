"use client"

import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { LuTags } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";

import type { ColumnDef } from "@tanstack/react-table";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const productStatusesColumns: ColumnDef<number>[] = [
    {
        accessorKey: "Status",
        header: () => <h3 className={headerClassName}>Trạng thái</h3>,
        cell: () => {
            return (
                <p className="header-table-row">Tên trạng thái</p>
            )
        }
    },
    {
        accessorKey: "productQuantity",
        header: () => <h3 className={headerClassName + " text-center"}>Số lượng sản phẩm</h3>,
        cell: () => {
            return (
                <p className="content-table-row text-center">5 sản phẩm</p>
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
                        <DropdownMenuTrigger className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                            <HiDotsVertical
                                size={18}
                                className="text-zinc-700"
                            />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/product-settings/product-statuses/status-slug">
                                    <LuTags />
                                    Gán trạng thái
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default productStatusesColumns;
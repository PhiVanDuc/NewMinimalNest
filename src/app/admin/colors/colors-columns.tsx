"use client"

import Link from "next/link";
import ColorsDeleteAction from "@/app/admin/colors/components/ColorsDeleteAction";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import type { ColumnDef } from "@tanstack/react-table";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const colorsColumns: ColumnDef<number>[] = [
    {
        accessorKey: "color",
        header: () => <h3 className={headerClassName}>Màu sắc</h3>,
        cell: () => {
            return (
                <div className="flex items-center gap-[15px]">
                    <span
                        className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                        style={{
                            background: "#ccc"
                        }}
                    />

                    <p className="header-table-row">Màu xám</p>
                </div>
            )
        }
    },
    {
        accessorKey: "productQuantity",
        header: () => <h3 className={headerClassName}>Số lượng sản phẩm</h3>,
        cell: () => {
            return (
                <p className="content-table-row">100 sản phẩm</p>
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
                                <Link href="/admin/colors/color-slug">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <ColorsDeleteAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default colorsColumns;
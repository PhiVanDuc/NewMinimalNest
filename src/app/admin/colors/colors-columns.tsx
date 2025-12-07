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
import type { ColorDataType } from "@/app/admin/colors/types";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const colorsColumns: ColumnDef<ColorDataType>[] = [
    {
        accessorKey: "color",
        header: () => <h3 className={headerClassName}>Màu sắc</h3>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <div className="flex items-center gap-[15px]">
                    <span
                        className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                        style={{
                            background: data.color_code
                        }}
                    />

                    <p className="header-table-row">{data.name}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className={headerClassName + " text-center"}>Hành động</h3>,
        cell: ({ row }) => {
            const id = row.original.id;

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
                                <Link href={`/admin/colors/${id}`}>
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <ColorsDeleteAction id={id} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default colorsColumns;
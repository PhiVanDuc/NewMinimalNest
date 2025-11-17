"use client"

import Link from "next/link";
import ProductGroupsActionDelete from "@/app/admin/product-settings/product-groups/components/ProductGroupsActionDelete";

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

const productGroupsColumns: ColumnDef<number>[] = [
    {
        accessorKey: "product",
        header: () => <h3 className={headerClassName}>Nhóm sản phẩm</h3>,
        cell: () => {
            return (
                <p className="header-table-row">Tên sản phẩm muốn nhóm</p>
            )
        }
    },
    {
        accessorKey: "categories",
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
                                <Link href="/admin/product-settings/product-groups/product-groups-id">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <ProductGroupsActionDelete />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default productGroupsColumns;
"use client"

import Link from "next/link";
import CategoriesDeleteAction from "@/app/admin/categories/components/CategoriesDeleteAction";

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

const categoriesColumns: ColumnDef<number>[] = [
    {
        accessorKey: "category",
        header: () => <h3 className={headerClassName}>Danh mục</h3>,
        cell: () => {
            return (
                <p className="header-table-row">Danh mục sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "productCount",
        header: () => <h3 className={headerClassName}>Đếm sản phẩm</h3>,
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
                                <Link href="/admin/categories/category-slug">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <CategoriesDeleteAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default categoriesColumns;
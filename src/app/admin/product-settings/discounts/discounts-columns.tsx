"use client"

import Link from "next/link";
import Price from "@/components/Price";
import DiscountsDeleteAction from "@/app/admin/product-settings/discounts/components/DiscountsDeleteAction";

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
        accessorKey: "event",
        header: () => <h3 className={headerClassName}>Sự kiện giảm giá</h3>,
        cell: () => {
            return (
                <p className="header-table-row">Tên sự kiện giảm giá</p>
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => <h3 className={headerClassName}>Giảm giá</h3>,
        cell: () => {
            return (
                <Price className="text-[15px]" />
            )
        }
    },
    {
        accessorKey: "productQuantity",
        header: () => <h3 className={headerClassName}>Số lượng sản phẩm</h3>,
        cell: () => {
            return (
                <p className="content-table-row">5 sản phẩm</p>
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
                                <Link href="/admin/product-settings/discounts/discount-slug">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <DiscountsDeleteAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default productGroupsColumns;
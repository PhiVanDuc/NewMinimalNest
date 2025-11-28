"use client"

import Link from "next/link";
import Price from "@/components/Price";
import Badge from "@/components/Badge";
import ProductsDeleteAction from "@/app/admin/products/components/ProductsDeleteAction";

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

const productsColumns: ColumnDef<number>[] = [
    {
        accessorKey: "product",
        header: () => <h3 className={headerClassName}>Sản phẩm</h3>,
        cell: () => {
            return (
                <div className="flex items-stretch gap-[15px]">
                    <div className="w-[80px] aspect-square rounded-[10px] bg-zinc-300" />

                    <div className="self-stretch flex flex-col justify-between">
                        <div className="space-y-[4px]">
                            <p className="header-table-row">
                                Bàn làm việc Ikea
                            </p>

                            <Price className="text-[14px]" />
                        </div>

                        <div className="flex flex-wrap items-center space-x-[-5px]">
                            <span className="shrink-0 size-[18px] rounded-full bg-amber-400 transition-colors cursor-pointer outline-[3px] outline-white" />
                            <span className="shrink-0 size-[18px] rounded-full bg-amber-400 transition-colors cursor-pointer outline-[3px] outline-white" />
                            <span className="shrink-0 size-[18px] rounded-full bg-amber-400 transition-colors cursor-pointer outline-[3px] outline-white" />
                            <span className="shrink-0 size-[18px] rounded-full bg-amber-400 transition-colors cursor-pointer outline-[3px] outline-white" />
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "categories",
        header: () => <h3 className={headerClassName}>Danh mục</h3>,
        cell: () => {
            return (
                <div className="flex flex-wrap gap-[6px]">
                    <Badge variant="outline">
                        <p>Sofa</p>
                    </Badge>

                    <Badge variant="outline">
                        <p>Ghế bành</p>
                    </Badge>

                    <Badge variant="outline">
                        <p>Phòng khách</p>
                    </Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h3 className={headerClassName}>Giá bán</h3>,
        cell: () => {
            return (
                <Price className="text-[15px]" />
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
                                <Link href="/admin/products/product-slug">
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <ProductsDeleteAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default productsColumns;
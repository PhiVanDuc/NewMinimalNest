"use client"

import Link from "next/link";
import Badge from "@/components/Badge";
import Price from "@/components/Price";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import { ColumnDef } from "@tanstack/react-table";

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

                            <Price
                                className="text-[14px] gap-[8px]"
                                priceClassName="text-[14px] font-medium"
                            />
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
                <div className="flex flex-wrap gap-[8px]">
                    <Badge className="bg-transparent text-zinc-700 border border-zinc-300">
                        <p>Sofa</p>
                    </Badge>

                    <Badge className="bg-transparent text-zinc-700 border border-zinc-300">
                        <p>Ghế tựa</p>
                    </Badge>

                    <Badge className="bg-transparent text-zinc-700 border border-zinc-300">
                        <p>Phòng khách</p>
                    </Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => <h3 className={headerClassName}>Giảm giá</h3>,
        cell: () => {
            return (
                <Price
                    className="text-[15px] gap-[8px]"
                    priceClassName="text-[15px] font-medium"
                />
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h3 className={headerClassName}>Giá bán</h3>,
        cell: () => {
            return (
                <Price
                    className="text-[15px] gap-[8px]"
                    priceClassName="text-[15px] font-medium"
                />
            )
        }
    },
    {
        accessorKey: "display",
        header: () => <h3 className={headerClassName}>Hiển thị</h3>,
        cell: () => {
            return (
                <div></div>
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
                                <Link href="/admin/colors/color-slug">
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

export default productsColumns;
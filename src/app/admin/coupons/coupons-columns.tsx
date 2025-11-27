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

import couponStatuses from "@/consts/coupon-statuses";

import type { ColumnDef } from "@tanstack/react-table";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const couponsColumns: ColumnDef<number>[] = [
    {
        accessorKey: "coupon",
        header: () => <h3 className={headerClassName}>Phiếu giảm giá</h3>,
        cell: () => {
            return (
                <div className="space-y-[2px]">
                    <p className="text-[13px] text-theme-main font-medium">COUPONCODE2025</p>
                    <p className="header-table-row">Tên phiếu giảm giá</p>
                </div>
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
        accessorKey: "quantity",
        header: () => <h3 className={headerClassName}>Số lượng</h3>,
        cell: () => {
            return (
                <p className="content-table-row">1000</p>
            )
        }
    },
    {
        accessorKey: "startDate",
        header: () => <h3 className={headerClassName}>Ngày bắt đầu</h3>,
        cell: () => {
            return (
                <p className="content-table-row">20 Tháng 10 2024</p>
            )
        }
    },
    {
        accessorKey: "endDate",
        header: () => <h3 className={headerClassName}>Ngày kết thúc</h3>,
        cell: () => {
            return (
                <p className="content-table-row">20 Tháng 10 2024</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h3 className={headerClassName}>Trạng thái</h3>,
        cell: () => {
            return (
                <Badge
                    className="text-white"
                    style={{ background: couponStatuses["hoat-dong"].colorCode }}
                >
                    <p>{couponStatuses["hoat-dong"].label}</p>
                </Badge>
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
                                <Link href="/admin/coupons/coupon-slug">
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

export default couponsColumns;
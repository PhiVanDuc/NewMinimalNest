import Badge from "@/components/Badge";
import InventoryUpdateAction from "@/app/admin/inventory/components/InventoryUpdateAction";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";

import inventoryStatuses from "@/consts/inventory-statuses";

import type { ColumnDef } from "@tanstack/react-table";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const inventoryColumns: ColumnDef<number>[] = [
    {
        accessorKey: "product",
        header: () => <h3 className={headerClassName}>Sản phẩm</h3>,
        cell: () => {
            return (
                <div className="flex items-stretch gap-[15px]">
                    <div className="w-[80px] aspect-square rounded-[10px] bg-zinc-300" />

                    <div className="self-stretch flex flex-col justify-between">
                        <div className="space-y-[2px]">
                            <p className="text-[13px] text-theme-main font-medium">Mã SKU</p>
                            <p className="header-table-row">Bàn làm việc Ikea</p>
                        </div>

                        <span className="shrink-0 size-[18px] rounded-full bg-amber-400 transition-colors cursor-pointer outline-[3px] outline-white" />
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "totalQuantity",
        header: () => <h3 className={headerClassName}>Tổng số lượng</h3>,
        cell: () => {
            return (
                <p className="content-table-row">100</p>
            )
        }
    },
    {
        accessorKey: "preOrderQuantity",
        header: () => <h3 className={headerClassName}>Đặt trước</h3>,
        cell: () => {
            return (
                <p className="content-table-row">100</p>
            )
        }
    },
    {
        accessorKey: "availableQuantity",
        header: () => <h3 className={headerClassName}>Khả dụng</h3>,
        cell: () => {
            return (
                <p className="content-table-row">100</p>
            )
        }
    },
    {
        accessorKey: "oversellQuantity",
        header: () => <h3 className={headerClassName}>Bán vượt</h3>,
        cell: () => {
            return (
                <p className="content-table-row">100</p>
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
                    style={{ background: inventoryStatuses["ly-tuong"].colorCode }}
                >
                    <p>{inventoryStatuses["ly-tuong"].label}</p>
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
                            <InventoryUpdateAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default inventoryColumns;
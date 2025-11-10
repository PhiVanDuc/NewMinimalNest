"use client"

import Price from "@/components/Price";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { PiTrashSimpleBold } from "react-icons/pi";

import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const cartColumns: ColumnDef<number>[] = [
    {
        accessorKey: "selectAll",
        header: () => {
            return (
                <Checkbox
                    className={cn(
                        "size-[16px] border-zinc-400 data-[state=checked]:bg-theme-main data-[state=checked]:border-theme-main/80",
                        "md:size-[18px]"
                    )}
                />
            )
        },
        cell: () => {
            return (
                <Checkbox
                    className={cn(
                        "size-[16px] border-zinc-400 data-[state=checked]:bg-theme-main data-[state=checked]:border-theme-main/80",
                        "md:size-[18px]"
                    )}
                />
            )
        }
    },
    {
        accessorKey: "product",
        header: () => <h3 className={headerClassName}>Sản phẩm</h3>,
        cell: () => {
            return (
                <div className="flex items-stretch gap-[15px]">
                    <div
                        className={cn(
                            "w-[60px] aspect-square rounded-[10px] bg-zinc-300",
                            "md:w-[70px]",
                            "xl:w-[80px]"
                        )}
                    />

                    <div className="self-stretch flex flex-col">
                        <div
                            className={cn(
                                "flex-1 space-y-[2px]",
                                "md:space-y-[4px]"
                            )}
                        >
                            <p className="header-table-row">
                                Bàn làm việc Ikea
                            </p>

                            <Price
                                className={cn(
                                    "text-[12px]",
                                    "sm:text-[13px]",
                                    "md:text-[14px]"
                                )}
                            />
                        </div>

                        <div className="flex items-center gap-[10px]">
                            <p
                                className={cn(
                                    "text-[12px] text-zinc-600 font-medium",
                                    "md:text-[14px]"
                                )}
                            >
                                Màu sắc
                            </p>

                            <span
                                className={cn(
                                    "shrink-0 w-[10px] aspect-square rounded-full bg-amber-400 outline-[2px] outline-offset-1 outline-zinc-100 hover:outline-zinc-200 transition-colors cursor-pointer",
                                    "md:w-[15px] md:outline-offset-2"
                                )}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "subTotal",
        header: () => <h3 className={headerClassName}>Thành tiền</h3>,
        cell: () => {
            return (
                <div className="space-y-[8px]">
                    <Price
                        className={cn(
                            "text-[14px]",
                            "md:text-[15px]"
                        )}
                    />

                    <p className="flex items-center gap-[5px] text-[14px]">
                        <span className="text-zinc-600">Số lượng</span>
                        <span className="font-medium">--</span>
                        <span className="font-medium">1</span>
                    </p>
                </div>
            )
        }
    },
    {
        accessorKey: "delete",
        header: () => <h3 className={cn(headerClassName, "text-center")}>Xoá</h3>,
        cell: () => {
            return (
                <div className="flex w-full justify-center">
                    <div className="flex items-center justify-center w-[30px] aspect-square rounded-[10px] hover:bg-zinc-200 transition-colors cursor-pointer">
                        <PiTrashSimpleBold size={18} className="text-[18px] text-red-500" />
                    </div>
                </div>
            )
        }
    }
];

export default cartColumns;
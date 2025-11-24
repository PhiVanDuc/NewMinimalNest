"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const InventoryUpdateFormDialog = dynamic(() => import("@/app/admin/inventory/components/InventoryUpdateFormDialog"), { ssr: false });

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

export default function InventoryActionColumn() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                        <HiDotsVertical
                            size={18}
                            className="text-zinc-700"
                        />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={() => { setIsOpenDialog(true) }}
                        >
                            <IoReloadOutline />
                            Cập nhật tồn kho
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {
                isOpenDialog && (
                    <InventoryUpdateFormDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                    />
                )
            }
        </>
    )
}
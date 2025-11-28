"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const InventoryUpdateFormDialog = dynamic(() => import("@/app/admin/inventory/components/InventoryUpdateFormDialog"), { ssr: false });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IoReloadOutline } from "react-icons/io5";

export default function InventoryUpdateAction() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                onClick={() => setIsOpenDialog(true)}
            >
                <IoReloadOutline />
                Cập nhật
            </DropdownMenuItem>

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
"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const DialogDeleteConfirm = dynamic(() => import("@/components/DialogDeleteConfirm"), { ssr: false, loading: () => <></> });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PiTrashSimpleBold } from "react-icons/pi";

export default function ProductsActionDelete() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                onClick={() => { setIsOpenDialog(true) }}
            >
                <PiTrashSimpleBold />
                Xoá
            </DropdownMenuItem>

            {
                isOpenDialog && (
                    <DialogDeleteConfirm
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        object="sản phẩm"
                    />
                )
            }
        </>
    )
}

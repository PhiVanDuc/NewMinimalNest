"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const DialogConfirmDelete = dynamic(() => import("@/components/DialogConfirmDelete"), { ssr: false, loading: () => <></> });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PiTrashSimpleBold } from "react-icons/pi";

export default function BannersDeleteAction() {
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
                    <DialogConfirmDelete
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        object="Banner"
                    />
                )
            }
        </>
    )
}

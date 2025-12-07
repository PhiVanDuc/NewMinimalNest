"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const ConfirmDeleteDialog = dynamic(() => import("@/components/ConfirmDeleteDialog"), { ssr: false, loading: () => <></> });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PiTrashSimpleBold } from "react-icons/pi";

interface PropsType {
    id: string
}

export default function ColorsDeleteAction({ id }: PropsType) {
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
                    <ConfirmDeleteDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        object="màu sắc"
                        handleClickDelete={() => console.log(id)}
                    />
                )
            }
        </>
    )
}

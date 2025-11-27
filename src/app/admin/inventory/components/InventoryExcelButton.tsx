"use client"

import { useState } from "react";

import Link from "next/link";
import InventoryExcelResultDialog from "@/app/admin/inventory/components/InventoryExcelResultDialog";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { FiEdit2 } from "react-icons/fi";
import { PiExportBold } from "react-icons/pi";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaRegFileExcel } from "react-icons/fa6";


export default function InventoryExcelButton() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [resultType, setResultType] = useState<"overwrite" | "increase" | "decrease">("overwrite");

    const handleClickAction = (action: "overwrite" | "increase" | "decrease") => {
        setIsOpenDialog(true);
        setResultType(action);
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="bg-theme-main hover:bg-theme-main/95">
                        <FaRegFileExcel />
                        Thao tác Excel
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                        <Link href="/admin/inventory/template-excel">
                            <PiExportBold />
                            Xuất mẫu Excel
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={() => handleClickAction("overwrite")}
                    >
                        <FiEdit2 />
                        Ghi đè tồn kho
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={() => handleClickAction("increase")}
                    >
                        <FiPlus />
                        Tăng tồn kho
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={() => handleClickAction("decrease")}
                    >
                        <FiMinus />
                        Giảm tồn kho
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <InventoryExcelResultDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
                resultType={resultType}
            />
        </>
    )
}
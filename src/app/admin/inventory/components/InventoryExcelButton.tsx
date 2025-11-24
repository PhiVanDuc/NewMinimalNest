"use client"

import Link from "next/link";

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
    return (
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

                <DropdownMenuItem>
                    <FiEdit2 />
                    Ghi đè tồn kho
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <FiPlus />
                    Tăng tồn kho
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <FiMinus />
                    Giảm tồn kho
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
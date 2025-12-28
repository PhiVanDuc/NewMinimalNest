"use client"

import { useState } from "react";

import Link from "next/link";
import ColorDeleteOption from "@/app/admin/colors/components/ColorDeleteOption";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import type { ColorDataType } from "@/app/admin/colors/types";

interface PropsType {
    data: ColorDataType
}

export default function ColorActionOptions({ data }: PropsType) {
    const { id } = data;
    const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

    return (
        <div className="flex justify-center">
            <DropdownMenu
                open={isOpenDropdownMenu}
                onOpenChange={setIsOpenDropdownMenu}
            >
                <DropdownMenuTrigger className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                    <HiDotsVertical
                        size={18}
                        className="text-zinc-700"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href={`/admin/colors/update/${id}`}>
                            <IoReloadOutline />
                            Cập nhật
                        </Link>
                    </DropdownMenuItem>

                    <ColorDeleteOption
                        id={id}
                        setIsOpenDropdownMenu={setIsOpenDropdownMenu}
                    />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
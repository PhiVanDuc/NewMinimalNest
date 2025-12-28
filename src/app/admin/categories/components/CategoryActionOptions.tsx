"use client"

import { useState } from "react";

import Link from "next/link";
import CategoryDeleteOption from "@/app/admin/categories/components/CategoryDeleteOption";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import type { CategoryDataType } from "@/app/admin/categories/types";

interface PropsType {
    data: CategoryDataType
}

export default function CategoryActionOptions({ data }: PropsType) {
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
                        <Link href={`/admin/categories/update/${id}`}>
                            <IoReloadOutline />
                            Cập nhật
                        </Link>
                    </DropdownMenuItem>

                    <CategoryDeleteOption
                        id={id}
                        setIsOpenDropdownMenu={setIsOpenDropdownMenu}
                    />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
"use client"

import Link from "next/link";

import {
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

interface PropsType {
    side?: "top" | "right" | "bottom" | "left",
    align?: "start" | "center" | "end"
}

export default function NavbarDropdownMenu({ side = "bottom", align = "end" }: PropsType) {
    return (
        <DropdownMenuContent
            side={side}
            align={align}
            sideOffset={10}
            className="border-zinc-300"
        >
            <DropdownMenuItem
                className="cursor-pointer"
                asChild
            >
                <Link href="/profile">
                    <FiUser />
                    Hồ sơ
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer">
                <IoIosLogOut />
                Đăng xuất
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}
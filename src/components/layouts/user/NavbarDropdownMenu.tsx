"use client"

import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import {
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { PiMedalFill } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

import type { ReduxStateType } from "@/store/store";
import ranks from "@/consts/ranks";

interface PropsType {
    side?: "top" | "right" | "bottom" | "left",
    align?: "start" | "center" | "end"
}

export default function NavbarDropdownMenu({ side = "bottom", align = "end" }: PropsType) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: ReduxStateType) => state.drawer[drawerIds.navbar]);

    const handleClose = () => {
        if (isOpen) {
            dispatch(
                drawerSlice.actions.close(drawerIds.navbar)
            )
        }
    }

    return (
        <DropdownMenuContent
            side={side}
            align={align}
            sideOffset={10}
            className="border-zinc-300 text-zinc-800"
        >
            <DropdownMenuItem
                className="flex flex-col items-center gap-[10px] px-[20px] cursor-pointer"
            >
                <PiMedalFill
                    className="!size-[20px]"
                    style={{
                        color: ranks.kimcuong.color
                    }}
                />

                {ranks.kimcuong.name}
            </DropdownMenuItem>

            <DropdownMenuItem
                className="cursor-pointer"
                asChild
            >
                <Link
                    href="/info"
                    onClick={handleClose}
                >
                    <FiUser />
                    Thông tin
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleClose}
            >
                <IoIosLogOut />
                Đăng xuất
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}
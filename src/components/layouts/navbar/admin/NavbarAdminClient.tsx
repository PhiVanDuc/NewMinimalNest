"use client"

import { useDispatch } from "react-redux";

import Link from "next/link";
import Logo from "@/components/layouts/navbar/Logo";
import NavbarAdminNotification from "@/components/layouts/navbar/admin/NavbarAdminNotification";

import { FiMenu } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";

import { cn } from "@/lib/utils";
import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

export default function NavbarAdminClient() {
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(
            drawerSlice.actions.open(drawerIds.navbar)
        );
    }

    return (
        <>
            <div className="flex items-center gap-[30px]">
                <Logo
                    size={18}
                    className="cursor-pointer"
                    translateTop="!bg-white translate-x-[1.5px] translate-y-[3px]"
                    translateDown="!bg-white translate-x-[-1.5px] translate-y-[-3px]"
                />

                <Link
                    href="/"
                    className="navigate-button-bold flex items-center gap-[10px] px-[20px] py-[9px] text-[14px] text-zinc-800 font-semibold rounded-full bg-white cursor-pointer"
                >
                    Trang chủ

                    <TiLocationArrow size={18} className="translate-y-[-0.5px]" />
                </Link>
            </div>

            <div className={cn(
                "flex items-center gap-[30px]",
                "md:gap-[35px]"
            )}>
                <NavbarAdminNotification />

                <button
                    className="flex items-center justify-center w-[40px] aspect-square rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-white cursor-pointer transition-colors"
                    onClick={handleOpen}
                >
                    <FiMenu className="text-[18px]" />
                </button>
            </div>
        </>
    )
}
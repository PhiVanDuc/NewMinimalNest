"use client"

import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

import Logo from "./Logo";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import DrawerSectionTitle from "@/components/DrawerSectionTitle";
import NavbarDropdownMenu from "@/components/layouts/navbar/NavbarDropdownMenu";
import NavbarUserDrawerCart from "@/components/layouts/navbar/user/NavbarUserDrawerCart";

import {
    DropdownMenu,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { PiMedalFill } from "react-icons/pi";

import { cn } from "@/libs/utils";
import ranks from "@/consts/ranks";
import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

interface PropsType {
    drawerNavList: {
        id: string,
        title: string,
        list: {
            id: string,
            label: string,
            href: string,
            icon?: React.ReactNode | undefined
        }[]
    }[]
}

export default function NavbarDrawer({ drawerNavList }: PropsType) {
    const dispatch = useDispatch();
    const pathname = usePathname();

    const handleClose = () => {
        dispatch(
            drawerSlice.actions.close(drawerIds.navbar)
        );
    }

    return (
        <Drawer id={drawerIds.navbar}>
            <div className="flex items-center justify-between px-[20px]">
                <Logo
                    size={18}
                    className="cursor-pointer ml-[4px]"
                    translateTop="translate-x-[1.5px] translate-y-[3px] bg-theme-main"
                    translateDown="translate-x-[-1.5px] translate-y-[-3px] bg-theme-main"
                />

                <button
                    className="flex items-center justify-center w-[30px] aspect-square rounded-full bg-theme-main hover:bg-theme-main/95 text-white transition-colors cursor-pointer"
                    onClick={handleClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="flex-1 space-y-[25px] px-[20px] overflow-y-auto">
                {
                    drawerNavList.map(group => {
                        return (
                            <div
                                key={group.id}
                                className="space-y-[10px]"
                            >
                                <DrawerSectionTitle
                                    title={group.title}
                                />

                                <ul className="space-y-[5px]">
                                    {
                                        group.list.map(item => {
                                            const itemHref = item.href === "/"
                                                ? "/home"
                                                : item.href === "/admin"
                                                    ? "/admin/statistical" :
                                                    item.href

                                            const identifyHref = pathname === "/"
                                                ? "/home"
                                                : pathname === "/admin"
                                                    ? "/admin/statistical" :
                                                    pathname

                                            if (itemHref === "/cart") {
                                                return (
                                                    <NavbarUserDrawerCart
                                                        key={item.id}
                                                        itemHref={itemHref}
                                                        identifyHref={identifyHref}
                                                        handleClose={handleClose}
                                                    />
                                                )
                                            }

                                            return (
                                                <li key={item.id}>
                                                    <Link
                                                        href={item.href}
                                                        className={cn(
                                                            "flex items-center gap-[15px] px-[15px] py-[12px] w-full rounded-[10px] text-[14px] text-zinc-600 font-medium transition-colors",
                                                            identifyHref.startsWith(itemHref) ? "text-white bg-zinc-800 hover:bg-zinc-800/95" : "text-zinc-600 hover:text-white bg-white hover:bg-zinc-800"
                                                        )}
                                                        onClick={handleClose}
                                                    >
                                                        {item?.icon && item.icon}
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

            <div className="space-y-[10px] px-[20px]">
                <DrawerSectionTitle
                    title="Người dùng"
                />

                <DropdownMenu>
                    <DropdownMenuTrigger
                        suppressHydrationWarning
                        asChild
                    >
                        <div className="relative flex items-center gap-[12px] w-full px-[15px] py-[12px] pr-[65px] rounded-[10px] bg-zinc-100 cursor-pointer">
                            <div className="shrink-0 w-[40px] aspect-square rounded-full bg-zinc-300" />

                            <div className="w-full text-start leading-tight space-y-[4px] overflow-hidden">
                                <p className="text-[14px] text-zinc-700 font-medium capitalize truncate-1">Tên người dùng</p>
                                <p className="text-[14px] text-zinc-600 truncate-1">example@gmail.com</p>
                            </div>

                            <div
                                className="absolute top-1/2 -translate-y-1/2 right-[15px] flex items-center justify-center size-[35px] rounded-full bg-white"
                                style={{
                                    border: `2px solid ${ranks["khach-vip"].colorCode}`
                                }}
                            >
                                <PiMedalFill
                                    size={18}
                                    style={{
                                        color: ranks["khach-vip"].colorCode
                                    }}
                                />
                            </div>
                        </div>
                    </DropdownMenuTrigger>

                    <NavbarDropdownMenu align="start" />
                </DropdownMenu>
            </div>
        </Drawer>
    )
}

{/* <div className="flex items-center gap-[5px]">
    <Link
        href="/"
        className="flex items-center justify-between gap-[10px] px-[20px] py-[9px] w-full text-[14px] text-white font-semibold rounded-[6px] bg-zinc-800 cursor-pointer"
    >
        Đăng nhập

        <TiLocationArrow size={18} className="translate-y-[-0.5px]" />
    </Link>

    <Link
        href="/register"
        className="shrink-0 px-[20px] py-[9px] text-[14px] text-zinc-800 font-semibold rounded-[6px] bg-transparent cursor-pointer"
    >
        Đăng ký
    </Link>
</div> */}
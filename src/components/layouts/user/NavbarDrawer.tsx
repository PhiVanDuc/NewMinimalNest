"use client"

import { useDispatch, useSelector } from "react-redux";

import Logo from "./Logo";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import DrawerPartTitle from "@/components/DrawerPartTitle";
import NavbarDropdownMenu from "@/components/layouts/user/NavbarDropdownMenu";

import {
    DropdownMenu,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { PiMedalFill } from "react-icons/pi";
import { TiLocationArrow } from "react-icons/ti";

import ranks from "@/consts/ranks";
import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

import type { ReduxStateType } from "@/store/store";

const navList = [
    {
        id: 1,
        name: "Sản phẩm",
        href: "/products"
    },
    {
        id: 2,
        name: "Phiếu giảm giá",
        href: "/coupons"
    },
    {
        id: 3,
        name: "Hoàn trả",
        href: "/return-request"
    }
];

export default function NavbarDrawer() {
    const dispatch = useDispatch();
    const cart = useSelector((state: ReduxStateType) => state.cart);

    const handleClose = () => {
        dispatch(
            drawerSlice.actions.close(drawerIds.navbar)
        )
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

            <div className="flex-1 space-y-[25px] px-[20px]">
                <div className="space-y-[10px]">
                    <DrawerPartTitle
                        title="Chung"
                    />

                    <div className="space-y-[5px]">
                        <Link
                            href="/"
                            className="flex items-center justify-between px-[15px] py-[12px] w-full rounded-[10px] bg-zinc-800 text-[14px] text-white font-medium"
                            onClick={handleClose}
                        >
                            <span>Trang chủ</span>
                            <TiLocationArrow size={20} className="translate-y-[-0.5px]" />
                        </Link>

                        <Link
                            href="/admin"
                            className="inline-block px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-800 text-[14px] text-zinc-600 hover:text-white font-medium transition-colors"
                            onClick={handleClose}
                        >
                            Trang quản trị
                        </Link>
                    </div>
                </div>

                <div className="space-y-[10px]">
                    <DrawerPartTitle
                        title="Điều hướng"
                    />

                    <ul className="space-y-[5px]">
                        {
                            navList.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            className="inline-block px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-800 text-[14px] text-zinc-600 hover:text-white font-medium transition-colors"
                                            onClick={handleClose}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="space-y-[10px] px-[20px]">
                <DrawerPartTitle
                    title="Người dùng"
                />

                <div className="flex flex-col gap-[5px]">
                    <div className="relative">
                        <Link
                            href="/cart"
                            className="inline-block px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors"
                            onClick={handleClose}
                        >
                            Giỏ hàng
                        </Link>

                        {
                            cart.length > 0 &&
                            (
                                <Link
                                    href="/cart"
                                    className="absolute inline-block top-1/2 right-[15px] -translate-y-1/2 w-fit px-[8px] py-[4px] bg-orange-700 rounded-full text-[10px] text-white font-medium"
                                >
                                    {cart.length > 99 ? "+99" : cart.length}
                                </Link>
                            )
                        }
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="relative flex items-center gap-[12px] w-full px-[15px] py-[12px] pr-[65px] rounded-[10px] bg-zinc-100 cursor-pointer">
                                <div className="shrink-0 w-[40px] aspect-square rounded-full bg-zinc-300" />

                                <div className="w-full text-start leading-tight space-y-[4px] overflow-hidden">
                                    <p className="text-[14px] text-zinc-700 font-medium capitalize truncate-1">Tên người dùng</p>
                                    <p className="text-[14px] text-zinc-600 truncate-1">example@gmail.com</p>
                                </div>

                                <div
                                    className="absolute top-1/2 -translate-y-1/2 right-[15px] flex items-center justify-center size-[35px] rounded-full bg-white"
                                    style={{
                                        border: `2px solid ${ranks.kimcuong.color}`
                                    }}
                                >
                                    <PiMedalFill
                                        size={18}
                                        style={{
                                            color: ranks.kimcuong.color
                                        }}
                                    />
                                </div>
                            </button>
                        </DropdownMenuTrigger>

                        <NavbarDropdownMenu align="start" />
                    </DropdownMenu>
                </div>
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
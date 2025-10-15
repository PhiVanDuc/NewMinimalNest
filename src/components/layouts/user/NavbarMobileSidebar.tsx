"use client"

import { useDispatch } from "react-redux";

import Logo from "./Logo";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import DrawerPartTitle from "@/components/DrawerPartTitle";

import { TiLocationArrow } from "react-icons/ti";

import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

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
        name: "Giới thiệu",
        href: "/about"
    }
];

export default function NavbarMobileSidebar() {
    const dispatch = useDispatch();

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

                    <Link
                        href="/"
                        className="flex items-center justify-between px-[15px] py-[12px] w-full rounded-[10px] bg-zinc-800 text-[14px] text-white font-medium"
                        onClick={handleClose}
                    >
                        <span>Trang chủ</span>
                        <TiLocationArrow size={20} className="translate-y-[-0.5px]" />
                    </Link>
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
                                            className="flex items-center justify-between px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-800 text-[14px] text-zinc-600 hover:text-white font-medium transition-colors"
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

                <div className="flex items-center gap-[5px]">
                    <Link
                        href="/"
                        className="flex items-center justify-between gap-[10px] px-[20px] py-[9px] w-[70%] text-[14px] text-white font-semibold rounded-[6px] bg-zinc-800 cursor-pointer"
                    >
                        Đăng nhập

                        <TiLocationArrow size={18} className="translate-y-[-0.5px]" />
                    </Link>

                    <Link
                        href="/register"
                        className="shrink-0 px-[20px] py-[9px] w-[30%] text-[14px] text-zinc-800 font-semibold rounded-[6px] bg-transparent cursor-pointer"
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </Drawer>
    )
}
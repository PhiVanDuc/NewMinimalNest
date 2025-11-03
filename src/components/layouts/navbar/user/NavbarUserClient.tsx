"use client"

import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import Logo from "@/components/layouts/navbar/Logo";
import NavbarDropdownMenu from "@/components/layouts/navbar/NavbarDropdownMenu";

import {
    DropdownMenu,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { PiMedalFill } from "react-icons/pi";
import { FiUser, FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";

import { cn } from "@/lib/utils";
import ranks from "@/consts/ranks";
import drawerIds from "@/consts/drawer-ids";
import { userNavList } from "@/consts/navbar";
import drawerSlice from "@/store/slices/drawerSlice";

import type { ReduxStateType } from "@/store/store";

export default function NavbarUserClient() {
    const dispatch = useDispatch();
    const cart = useSelector((state: ReduxStateType) => state.cart);

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
                    translateTop="translate-x-[1.5px] translate-y-[3px]"
                    translateDown="translate-x-[-1.5px] translate-y-[-3px]"
                />

                <div className={cn(
                    "hidden items-center gap-[10px]",
                    "lg:flex"
                )}>
                    <Link
                        href="/"
                        className="navigate-button-bold flex items-center gap-[10px] px-[20px] py-[9px] text-[14px] text-white font-semibold rounded-full bg-zinc-800 cursor-pointer"
                    >
                        Trang chủ

                        <TiLocationArrow size={18} className="translate-y-[-0.5px]" />
                    </Link>

                    <Link
                        href="/admin"
                        className="navigate-button px-[20px] py-[9px] text-[14px] text-zinc-600 hover:text-white font-semibold rounded-full bg-transparent hover:bg-zinc-800 cursor-pointer"
                    >
                        Trang quản trị
                    </Link>
                </div>
            </div>

            <ul
                className={cn(
                    "hidden items-center gap-[10px]",
                    "lg:flex"
                )}
            >
                {
                    userNavList.map(item => {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="navigate-button px-[20px] py-[9px] text-[14px] text-zinc-600 hover:text-white font-semibold rounded-full bg-transparent hover:bg-zinc-800 cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div className={cn(
                "flex items-center gap-[30px]",
                "md:gap-[35px]"
            )}>
                <div className={cn(
                    "hidden relative",
                    "lg:block"
                )}>
                    <Link
                        href="/cart"
                        className="cart-button text-zinc-800 cursor-pointer"
                    >
                        <FiShoppingCart size={20} />
                    </Link>

                    {
                        cart.length > 0 &&
                        (
                            <Link
                                href="/cart"
                                className="absolute inline-block top-[-12px] right-[-14px] w-fit px-[8px] py-[4px] bg-orange-600 rounded-full text-[10px] text-white font-medium"
                            >
                                {cart.length > 99 ? "+99" : cart.length}
                            </Link>
                        )
                    }
                </div>

                <div className={cn(
                    "hidden",
                    "lg:block"
                )}>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="relative flex items-center justify-center w-[45px] aspect-square rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-white cursor-pointer transition-colors"
                            style={{
                                outline: `3px solid ${ranks["khach-super-vip"].color}`,
                                outlineOffset: "3px"
                            }}
                        >
                            <FiUser size={20} />

                            <div className="absolute -bottom-[30px] flex items-center justify-center size-[40px] rounded-full bg-white">
                                <PiMedalFill
                                    size={24}
                                    style={{
                                        color: ranks["khach-super-vip"].color
                                    }}
                                />
                            </div>
                        </DropdownMenuTrigger>

                        <NavbarDropdownMenu />
                    </DropdownMenu>
                </div>

                <button
                    className={cn(
                        "flex items-center justify-center w-[40px] aspect-square rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-white cursor-pointer transition-colors",
                        "lg:hidden"
                    )}
                    onClick={handleOpen}
                >
                    <FiMenu className="text-[18px]" />
                </button>
            </div>
        </>
    )
}

{/* <Link
    href="/register"
    className="navigate-button px-[20px] py-[9px] text-[14px] text-zinc-600 font-semibold rounded-full cursor-pointer"
>
    Đăng ký
</Link>

<Link
    href="/sign-in"
    className="navigate-button-bold flex items-center gap-[10px] px-[20px] py-[9px] text-[14px] text-white font-semibold rounded-full bg-zinc-800 cursor-pointer"
>
    Đăng nhập

    <TiLocationArrow size={18} className="translate-y-[-0.5px]" />
</Link> */}
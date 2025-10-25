"use client"

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Link from "next/link";
import Logo from "@/components/layouts/user/Logo";
import NavbarDropdownMenu from "@/components/layouts/user/NavbarDropdownMenu";

import {
    DropdownMenu,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { PiMedalFill } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";

import gsap from "gsap";
import ranks from "@/consts/ranks";
import ScrollTrigger from "gsap/ScrollTrigger";
import breakpoints from "@/consts/breakpoints";

import type { ReduxStateType } from "@/store/store";

gsap.registerPlugin(ScrollTrigger);

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

export default function NavbarDesktop() {
    const navbarRef = useRef<null | HTMLElement>(null);
    const lastScrollRef = useRef(0);
    const displayStatusRef = useRef("top");

    const cart = useSelector((state: ReduxStateType) => state.cart);
    const isDesktop = useMediaQuery(
        {
            query: `(min-width: ${breakpoints.lg.min}px)`
        }
    );

    useEffect(() => {
        if (isDesktop) {
            const handleScroll = () => {
                const currentScroll = window.scrollY;

                if (navbarRef.current) {
                    if (currentScroll <= 100 && currentScroll >= 0) {
                        if (displayStatusRef.current !== "top") {
                            navbarRef.current.classList.add("navbar-desktop-top");
                            navbarRef.current.classList.remove("navbar-desktop-on");
                            navbarRef.current.classList.remove("navbar-desktop-down");
                            displayStatusRef.current = "top";
                        }
                    }
                    else {
                        if (currentScroll > lastScrollRef.current) {
                            if (displayStatusRef.current !== "hidden") {
                                navbarRef.current.classList.remove("navbar-desktop-top");
                                navbarRef.current.classList.remove("navbar-desktop-on");
                                navbarRef.current.classList.add("navbar-desktop-down");
                                displayStatusRef.current = "hidden";
                            }
                        }
                        else {
                            if (displayStatusRef.current !== "visible") {
                                navbarRef.current.classList.remove("navbar-desktop-top");
                                navbarRef.current.classList.remove("navbar-desktop-down");
                                navbarRef.current.classList.add("navbar-desktop-on");
                                displayStatusRef.current = "visible";
                            }
                        }
                    }
                }

                lastScrollRef.current = currentScroll;
            }

            handleScroll();

            window.addEventListener("scroll", handleScroll);
            return () => { window.removeEventListener("scroll", handleScroll) }
        }
    }, [isDesktop]);

    return (
        <nav
            ref={navbarRef}
            className="navbar-desktop-top fixed top-[15px] left-[15px] right-[15px] px-[25px] py-[15px] hidden lg:flex items-center justify-between rounded-[15px] translate-y-[0%] opacity-100 transition-all duration-500 ease-in-out z-20"
        >
            <div className="flex items-center gap-[30px]">
                <Logo
                    size={18}
                    className="cursor-pointer"
                    translateTop="translate-x-[1.5px] translate-y-[3px]"
                    translateDown="translate-x-[-1.5px] translate-y-[-3px]"
                />

                <div className="flex items-center gap-[10px]">
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

            <ul className="flex items-center gap-[10px]">
                {
                    navList.map(item => {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="navigate-button px-[20px] py-[9px] text-[14px] text-zinc-600 hover:text-white font-semibold rounded-full bg-transparent hover:bg-zinc-800 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="flex items-center gap-[35px]">
                <div className="relative">
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

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="relative flex items-center justify-center w-[45px] aspect-square rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-white cursor-pointer transition-colors"
                            style={{
                                outline: `3px solid ${ranks.kimcuong.color}`,
                                outlineOffset: "3px"
                            }}
                        >
                            <FiUser size={20} />

                            <div className="absolute -bottom-[30px] flex items-center justify-center size-[40px] rounded-full bg-white">
                                <PiMedalFill
                                    size={24}
                                    style={{
                                        color: ranks.kimcuong.color
                                    }}
                                />
                            </div>
                        </button>
                    </DropdownMenuTrigger>

                    <NavbarDropdownMenu />
                </DropdownMenu>
            </div>
        </nav>
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
"use client"

import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Logo from "@/components/layouts/user/Logo";
import { FiMenu } from "react-icons/fi";

import sizeResponsive from "@/consts/size-responsive";
import navbarSidebarSlice from "@/store/slices/navbarSidebarSlice";

import { cn } from "@/lib/utils";

export default function NavbarMobile() {
    const dispatch = useDispatch();

    const navbarRef = useRef<null | HTMLElement>(null);
    const lastScrollRef = useRef(0);
    const displayStatusRef = useRef("top");

    const isMobile = useMediaQuery(
        {
            query: `(max-width: ${sizeResponsive.md.max}px)`
        }
    );

    const isLittle = useMediaQuery(
        {
            query: `(max-width: ${sizeResponsive.lt.max}px)`
        }
    )

    useEffect(() => {
        if (isMobile) {
            const handleScroll = () => {
                const currentScroll = window.scrollY;

                if (navbarRef.current) {
                    if (currentScroll <= 100 && currentScroll >= 0) {
                        if (displayStatusRef.current !== "top") {
                            navbarRef.current.classList.add("navbar-mobile-top");
                            navbarRef.current.classList.remove("navbar-mobile-on");
                            navbarRef.current.classList.remove("navbar-mobile-down");
                            displayStatusRef.current = "top";
                        }
                    }
                    else {
                        if (currentScroll > lastScrollRef.current) {
                            if (displayStatusRef.current !== "hidden") {
                                navbarRef.current.classList.remove("navbar-mobile-top");
                                navbarRef.current.classList.remove("navbar-mobile-on");
                                navbarRef.current.classList.add("navbar-mobile-down");
                                displayStatusRef.current = "hidden";
                            }
                        }
                        else {
                            if (displayStatusRef.current !== "visible") {
                                navbarRef.current.classList.remove("navbar-mobile-top");
                                navbarRef.current.classList.remove("navbar-mobile-down");
                                navbarRef.current.classList.add("navbar-mobile-on");
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
    }, [isMobile]);

    const handleToggle = () => {
        dispatch(
            navbarSidebarSlice.actions.toggle()
        );
    }

    return (
        <nav
            ref={navbarRef}
            className={cn(
                "navbar-mobile-top fixed top-[15px] left-[15px] right-[15px] px-[20px] py-[10px] flex lg:hidden items-center justify-between rounded-[15px] translate-y-[0%] opacity-100 transition-all duration-500 ease-in-out z-20",
                "sm:px-[25px] sm:py-[15px]"
            )}
        >
            <Logo
                size={isLittle ? 18 : 22}
                className="cursor-pointer"
                translateTop="translate-x-[1.5px] translate-y-[3px]"
                translateDown="translate-x-[-1.5px] translate-y-[-3px]"
            />

            <button
                className={cn(
                    "flex items-center justify-center w-[35px] aspect-square rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-white cursor-pointer transition-colors",
                    "sm:w-[45px]"
                )}
                onClick={handleToggle}
            >
                <FiMenu className="text-[15px] sm:text-[20px]" />
            </button>
        </nav>
    )
}

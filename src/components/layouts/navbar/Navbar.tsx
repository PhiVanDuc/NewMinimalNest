"use client"

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { cn } from "@/libs/utils";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PropsType {
    readonly children: React.ReactNode,
    isScroll?: boolean,
    className?: string
}

export default function Navbar({ children, isScroll = true, className = "" }: PropsType) {
    const navbarRef = useRef<null | HTMLElement>(null);
    const lastScrollRef = useRef(0);
    const displayStatusRef = useRef("top");

    useEffect(() => {
        if (isScroll) {
            const handleScroll = () => {
                const currentScroll = window.scrollY;

                if (navbarRef.current) {
                    if (currentScroll <= 50 && currentScroll >= 0) {
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
    }, [isScroll]);

    return (
        <nav
            ref={navbarRef}
            className={cn(
                "navbar-desktop-top fixed top-[15px] left-[20px] right-[20px] px-[25px] py-[15px] flex items-center justify-between rounded-[15px] translate-y-[0%] opacity-100 transition-all duration-500 ease-in-out z-20",
                className
            )}
        >
            {children}
        </nav>
    )
}
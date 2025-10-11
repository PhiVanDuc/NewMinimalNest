"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cn } from "@/lib/utils";
import navbarSidebarSlice from "@/store/slices/navbarSidebarSlice";

import type { ReduxStateType } from "@/store/store";

export default function NavbarMobileSidebar() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: ReduxStateType) => state.navbarSidebar.isOpen);

    useEffect(() => {
        if (isOpen) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalStyle;
            }
        }
    }, [isOpen]);

    const handleClose = () => {
        dispatch(
            navbarSidebarSlice.actions.close()
        )
    }

    return (
        <>
            <span
                className={cn(
                    "fixed inset-0 bg-black/30 backdrop-blur-md transition-all duration-500 cursor-pointer z-50",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={handleClose}
            />

            <div
                className={cn(
                    "fixed inset-[15px] sm:right-auto sm:w-[400px] bg-white rounded-[10px] transition-all duration-500 z-50",
                    isOpen ? "translate-0" : "-translate-x-[120%]"
                )}
            >

            </div>
        </>
    )
}

"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cn } from "@/libs/utils";
import drawerSlice from "@/store/slices/drawerSlice";

import type { ReduxStateType } from "@/store/store";

interface Props {
    readonly children: React.ReactNode,
    className?: string,
    id: string,
}

export default function Drawer({ children, className = "", id }: Props) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: ReduxStateType) => state.drawer[id]);

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
            drawerSlice.actions.close(id)
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

            <aside
                className={cn(
                    "fixed inset-[15px] sm:right-auto flex flex-col gap-[40px] py-[20px] sm:w-[400px] bg-white rounded-[10px] transition-all duration-500 z-50",
                    className,
                    isOpen ? "translate-0" : "-translate-x-[120%]"
                )}
            >
                {children}
            </aside>
        </>
    )
}
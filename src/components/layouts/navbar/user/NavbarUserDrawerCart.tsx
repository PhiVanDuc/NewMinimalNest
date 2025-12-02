"use client"

import { useSelector } from "react-redux";

import Link from "next/link";

import { cn } from "@/libs/utils";

import type { ReduxStateType } from "@/store/store";

interface PropsType {
    itemHref: string,
    identifyHref: string,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void
}

export default function NavbarDrawerCart({ itemHref, identifyHref, handleClose }: PropsType) {
    const cart = useSelector((state: ReduxStateType) => state.cart);

    return (
        <li className="relative">
            <Link
                href={itemHref}
                className={cn(
                    "inline-block px-[15px] py-[12px] w-full rounded-[10px] text-[14px] text-zinc-600 font-medium transition-colors",
                    identifyHref.startsWith(itemHref) ? "text-white bg-zinc-800 hover:bg-zinc-800/95" : "text-zinc-600 hover:text-white bg-white hover:bg-zinc-800"
                )}
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
        </li>
    )
}

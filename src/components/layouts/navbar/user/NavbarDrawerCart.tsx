"use client"

import { useSelector } from "react-redux";

import Link from "next/link";

import type { ReduxStateType } from "@/store/store";

interface PropsType {
    handleClose: (e: React.MouseEvent<HTMLElement>) => void
}

export default function NavbarDrawerCart({ handleClose }: PropsType) {
    const cart = useSelector((state: ReduxStateType) => state.cart);

    return (
        <div className="relative">
            <Link
                href="/cart"
                className="inline-block px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-800 text-[14px] text-zinc-600 hover:text-white font-medium transition-colors"
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
    )
}

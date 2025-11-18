"use client"

import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

import { cn } from "@/lib/utils";

export default function ProductActionButtons() {
    return (
        <div
            className={cn(
                "flex flex-col gap-[5px]",
                "sm:flex-row sm:gap-[10px]"
            )}
        >
            <Button
                className={cn(
                    "btn-lg",
                    "sm:flex-1"
                )}
            >
                <MdOutlineShoppingBag className="!size-5" />
                Mua ngay
            </Button>

            <Button className="btn-lg bg-theme-main hover:bg-theme-main/95">
                <FiShoppingCart className="!size-5" />
                Thêm vào giỏ hàng
            </Button>
        </div>
    )
}

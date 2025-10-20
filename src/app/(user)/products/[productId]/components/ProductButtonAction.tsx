"use client"

import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";

import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

import { cn } from "@/lib/utils";
import { v7 as uuidv7 } from 'uuid';
import cartSlice from "@/store/slices/cartSlice";

export default function ProductButtonAction() {
    const dispatch = useDispatch();

    const handleAddCartProduct = () => {
        const id = uuidv7();

        dispatch(
            cartSlice.actions.add({
                id,
                name: "",
                thumb: "",
                color: "",
                price: 1,
                quantity: 1
            })
        )
    }

    return (
        <div
            className={cn(
                "flex flex-col gap-[5px]",
                "sm:flex-row sm:gap-[10px]"
            )}
        >
            <Button
                className={cn(
                    "px-[20px] py-[25px] gap-[12px] bg-theme-main hover:bg-theme-main/95 cursor-pointer transition-colors",
                    "sm:flex-1"
                )}
                onClick={handleAddCartProduct}
            >
                <FiShoppingCart className="!size-5" />
                Thêm vào giỏ hàng
            </Button>

            <Button
                className="px-[20px] py-[25px] gap-[12px] cursor-pointer transition-colors"
                size="lg"
            >
                <MdOutlineShoppingBag className="!size-5" />
                Mua ngay
            </Button>
        </div>
    )
}

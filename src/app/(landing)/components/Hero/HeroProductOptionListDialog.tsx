"use client"

import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import Quantity from "@/components/Quantity";

import { Button } from "@/components/ui/button";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    action: "buyNow" | "addToCart"
}

export default function HeroProductOptionListDialog({ isOpen, setIsOpen, action }: PropsType) {
    const [quantity, setQuantity] = useState("1");

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        let value = target.value;

        if (value) {
            const isValid = positiveIntegerValidator(value);

            if (!isValid) value = "1";
            else if (Number(value) > 99) value = "99";
        }

        setQuantity(value);
    }

    const handleBlurQuantity = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === "") setQuantity("1");
    }

    const handleDecrease = () => {
        setQuantity(prev => {
            const num = Number(prev) - 1;
            return num < 1 ? "1" : String(num);
        });
    };

    const handleIncrease = () => {
        setQuantity(prev => {
            const num = Number(prev) + 1;
            return num > 99 ? "99" : String(num);
        });
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent className="max-h-[85dvh]">
                <DialogHeader>
                    <DialogTitle>Tuỳ chọn</DialogTitle>
                    <DialogDescription>
                        <span>Vui lòng chọn màu sắc và số lượng sản phẩm mà bạn muốn </span>
                        <span>{action === "buyNow" ? "mua ngay." : "thêm vào giỏ hàng."}</span>
                    </DialogDescription>
                </DialogHeader>

                <div className="px-[20px] space-y-[20px]">
                    <div className="space-y-[10px]">
                        <p
                            className={cn(
                                "text-[14px] text-zinc-600 font-medium",
                                "sm:text-[15px]"
                            )}
                        >
                            Màu sắc
                        </p>

                        <div className="flex flex-wrap items-center gap-[20px]">
                            <span
                                className={cn(
                                    "shrink-0 w-[25px] aspect-square rounded-full bg-amber-400 outline-[3px] outline-offset-2 outline-zinc-100 hover:outline-zinc-200 transition-colors cursor-pointer",
                                    "sm:w-[28px]"
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-[10px]">
                        <p
                            className={cn(
                                "text-[14px] text-zinc-600 font-medium",
                                "sm:text-[15px]"
                            )}
                        >
                            Số lượng
                        </p>

                        <Quantity
                            value={quantity}
                            handleDecrease={handleDecrease}
                            handleChangeQuantity={handleChangeQuantity}
                            handleBlurQuantity={handleBlurQuantity}
                            handleIncrease={handleIncrease}
                        />
                    </div>

                    <Button
                        className={cn(
                            "w-full",
                            action === "buyNow" ? "" : "bg-theme-main hover:bg-theme-main/95"
                        )}
                        onClick={() => { setIsOpen(false) }}
                    >
                        {
                            action === "buyNow" ?
                                (
                                    <>
                                        <MdOutlineShoppingBag />
                                        Mua ngay
                                    </>
                                ) :
                                <>
                                    <FiShoppingCart />
                                    Thêm vào giỏ hàng
                                </>
                        }
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

"use client"

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

export default function ProductVariant() {
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
        <div className="p-[20px] rounded-[10px] border border-zinc-200 space-y-[25px]">
            <div className="space-y-[10px]">
                <p
                    className={cn(
                        "text-[14px] text-zinc-600 font-medium",
                        "sm:text-[16px]"
                    )}
                >
                    Màu sắc
                </p>

                <div className="flex flex-wrap items-center gap-[20px]">
                    <span
                        className={cn(
                            "shrink-0 w-[25px] aspect-square rounded-full bg-amber-400 outline-[3px] outline-offset-2 outline-zinc-100 hover:outline-zinc-200 transition-colors cursor-pointer",
                            "sm:w-[30px]"
                        )}
                    />
                </div>
            </div>

            <div className="space-y-[10px]">
                <p
                    className={cn(
                        "text-[14px] text-zinc-600 font-medium",
                        "sm:text-[16px]"
                    )}
                >
                    Kích cỡ
                </p>

                <div
                    className={cn(
                        "grid grid-cols-1 gap-[10px]",
                        "sm:grid-cols-2",
                        "md:grid-cols-3"
                    )}
                >
                    {
                        Array.from({ length: 6 }).map((_, index) => {
                            return (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-full px-[20px] py-[12px] rounded-[10px] border border-transparent hover:border-zinc-400 bg-zinc-100 text-center text-[14px] text-zinc-600 transition-colors cursor-pointer",
                                        "sm:text-[15px] sm:py-[15px]"
                                    )}
                                >
                                    200 x 80 x 75 cm
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <div className="space-y-[10px]">
                <p
                    className={cn(
                        "text-[14px] text-zinc-600 font-medium",
                        "sm:text-[16px]"
                    )}
                >
                    Số lượng
                </p>

                <div
                    className={cn(
                        "flex items-center gap-[20px] w-full px-[20px] py-[10px] rounded-[10px] border border-zinc-200",
                        "sm:w-fit"
                    )}
                >
                    <FaMinus
                        className="text-[15px] cursor-pointer"
                        onClick={handleDecrease}
                    />

                    <Input
                        value={quantity}
                        onChange={handleChangeQuantity}
                        onBlur={handleBlurQuantity}
                        className={cn(
                            "w-full h-fit p-0 text-center text-[14px] focus-visible:ring-transparent border-none shadow-none",
                            "sm:text-[16px] sm:w-[80px]"
                        )}
                    />

                    <FaPlus
                        className="text-[15px] cursor-pointer"
                        onClick={handleIncrease}
                    />
                </div>
            </div>
        </div>
    )
}

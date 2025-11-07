"use client"

import { useState } from "react";
import Quantity from "@/components/Quantity";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

export default function ProductOptionList() {
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

    const handleClickDecrease = () => {
        setQuantity(prev => {
            const num = Number(prev) - 1;
            return num < 1 ? "1" : String(num);
        });
    };

    const handleClickIncrease = () => {
        setQuantity(prev => {
            const num = Number(prev) + 1;
            return num > 99 ? "99" : String(num);
        });
    };

    return (
        <div className="space-y-[20px]">
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
                    handleClickDecrease={handleClickDecrease}
                    handleChangeQuantity={handleChangeQuantity}
                    handleBlurQuantity={handleBlurQuantity}
                    handleClickIncrease={handleClickIncrease}
                />
            </div>
        </div>
    )
}

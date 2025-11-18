"use client"

import { useState } from "react";

import Quantity from "@/components/Quantity";

import { cn } from "@/lib/utils";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

export default function ProductOptions() {
    const [quantity, setQuantity] = useState("1");

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const positiveQuantityString = toPositiveIntegerString(e.target.value);
        if (!positiveQuantityString) setQuantity("");

        const positiveQuantity = Number(positiveQuantityString);
        if (positiveQuantity > 99) setQuantity("99");
        else setQuantity(positiveQuantityString);
    }

    const handleBlurQuantity = () => {
        if (quantity === "") setQuantity("1");
    }

    const handleClickAdjustment = (direction: "decrease" | "increase") => {
        let positiveQuantity = Number(quantity);

        if (direction === "decrease" && positiveQuantity > 1) positiveQuantity -= 1;
        else if (direction === "increase" && positiveQuantity < 99) positiveQuantity += 1;

        setQuantity(positiveQuantity.toString());
    }

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
                    handleBlurQuantity={handleBlurQuantity}
                    handleChangeQuantity={handleChangeQuantity}
                    handleClickDecrease={() => { handleClickAdjustment("decrease") }}
                    handleClickIncrease={() => { handleClickAdjustment("increase") }}
                />
            </div>
        </div>
    )
}
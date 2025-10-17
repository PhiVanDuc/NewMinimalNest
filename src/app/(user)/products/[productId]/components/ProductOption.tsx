"use client"

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

export default function ProductOption() {
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
        <div className="p-[15px] border border-zinc-200 rounded-[10px] space-y-[20px]">
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
                            "sm:w-[30px]"
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

                <div
                    className={cn(
                        "flex items-center gap-[20px] w-full px-[20px] py-[10px] rounded-[10px] border border-zinc-200",
                        "sm:w-fit"
                    )}
                >
                    <FaMinus
                        className="text-[15px] text-zinc-600 cursor-pointer"
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
                        className="text-[15px] text-zinc-600 cursor-pointer"
                        onClick={handleIncrease}
                    />
                </div>
            </div>
        </div>
    )
}

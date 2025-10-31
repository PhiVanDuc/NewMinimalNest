"use client"

import { Input } from "@/components/ui/input";
import { FiMinus, FiPlus } from "react-icons/fi";

import { cn } from "@/lib/utils";

interface PropsType {
    value: string,
    handleDecrease?: () => void,
    handleChangeQuantity?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleBlurQuantity?: (e: React.FocusEvent<HTMLInputElement>) => void,
    handleIncrease?: () => void,
    disabled?: boolean
}

export default function Quantity(
    {
        value,
        handleDecrease,
        handleChangeQuantity,
        handleBlurQuantity,
        handleIncrease,
        disabled = false
    }: PropsType
) {
    return (
        <div
            className={cn(
                "flex items-center gap-[10px] w-full p-[3px] rounded-full border border-zinc-300",
                "sm:w-fit"
            )}
        >
            <button
                type="button"
                className="shrink-0 flex items-center justify-center w-[35px] aspect-square rounded-full text-[14px] text-zinc-700 bg-white hover:bg-zinc-100 transition-colors cursor-pointer"
                onClick={() => { if (handleDecrease) handleDecrease() }}
            >
                <FiMinus className="text-[16px]" />
            </button>

            <Input
                value={value}
                onChange={handleChangeQuantity}
                onBlur={handleBlurQuantity}
                className={cn(
                    "w-full h-fit p-0 text-center text-[14px] focus-visible:ring-transparent border-none shadow-none",
                    "sm:w-[60px]"
                )}
                disabled={disabled}
            />

            <button
                type="button"
                className="shrink-0 flex items-center justify-center w-[35px] aspect-square rounded-full text-[14px] text-zinc-700 bg-white hover:bg-zinc-100 transition-colors cursor-pointer"
                onClick={() => { if (handleIncrease) handleIncrease() }}
            >
                <FiPlus className="text-[16px]" />
            </button>
        </div>
    )
}

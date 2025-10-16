"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { IoMdPricetag } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPlus, FaStar, FaMinus, FaCircleInfo } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

export default function ProductInfo() {
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
        <section
            className={cn(
                "w-full space-y-[35px]",
                "xl:w-[50%]"
            )}
        >
            <header
                className={cn(
                    "flex flex-col justify-between gap-[8px]",
                    "xl:flex-row xl:items-center"
                )}
            >
                <h1
                    className={cn(
                        "text-[20px] font-bold capitalize",
                        "md:text-[30px]",
                        "xl:text-[40px]"
                    )}
                >
                    Bàn làm việc isolate
                </h1>

                <div className="flex items-center gap-[8px]">
                    <p className="text-zinc-600 font-medium leading-tight">
                        4.9
                    </p>

                    <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />
                </div>
            </header>

            <div className="space-y-[15px]">
                <div className="flex items-center justify-between">
                    <div
                        className={cn(
                            "flex gap-[15px]",
                            "sm:items-center"
                        )}
                    >
                        <IoMdPricetag
                            className={cn(
                                "hidden text-[20px] translate-y-[2px]",
                                "min-[400px]:inline-block min-[400px]:text-[25px]",
                                "sm:text-[30px] sm:translate-y-0"
                            )}
                        />

                        <div
                            className={cn(
                                "flex flex-col gap-[5px]",
                                "sm:flex-row sm:items-end sm:gap-[15px]"
                            )}
                        >
                            <p
                                className={cn(
                                    "text-[18px] text-zinc-600 font-semibold",
                                    "lg:text-[22px]"
                                )}
                            >
                                <span>899.000</span>
                                <span className="inline-block w-[8px]" />
                                <span
                                    className={cn(
                                        "text-[14px] underline",
                                        "lg:text-[18px]"
                                    )}
                                >VNĐ</span>
                            </p>

                            <p
                                className="text-[18px] text-zinc-600 font-medium opacity-60"
                            >
                                <span className="line-through">999.000</span>
                                <span className="inline-block w-[8px]" />
                                <span className="text-[14px] underline">VNĐ</span>
                            </p>
                        </div>
                    </div>

                    <p
                        className={cn(
                            "shrink-0 w-fit px-[10px] py-[4px] bg-theme-main/5 rounded-full text-[12px] text-theme-main font-medium",
                            "sm:text-[14px]"
                        )}
                    >
                        - 10%
                    </p>
                </div>

                <div className="flex items-center gap-[15px] px-[20px] py-[8px] rounded-full border border-theme-main/10 bg-theme-main/5 text-theme-main">
                    <FaCircleInfo className="text-[20px]" />
                    <p className="text-[15px] font-medium">Còn hàng</p>
                </div>
            </div>

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
                        <p
                            className={cn(
                                "w-full px-[20px] py-[12px] rounded-[10px] border border-transparent hover:border-zinc-400 bg-zinc-100 text-center text-[14px] text-zinc-600 transition-colors cursor-pointer",
                                "sm:text-[15px] sm:py-[15px]"
                            )}
                        >
                            200 x 80 x 75 cm
                        </p>
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
        </section>
    )
}
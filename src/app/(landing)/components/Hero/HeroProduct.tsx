"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const HeroDialogProductOptions = dynamic(() => import("@/app/(landing)/components/Hero/HeroDialogProductOptions"));

import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

import { cn } from "@/libs/utils";

interface Props {
    currentProduct: {
        category: string,
        name: string,
        description: string,
        thumb: string,
        subThumbs: string[]
    }
}

export default function HeroProduct({ currentProduct }: Props) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [action, setAction] = useState<"buyNow" | "addToCart">("buyNow");

    const handleOpenDialog = (action: "buyNow" | "addToCart") => {
        setIsOpenDialog(true);
        setAction(action);
    }

    return (
        <>
            <div
                className={cn(
                    "relative shrink-0 container-top w-full z-10",
                    "lg:mt-0 lg:w-[40%]"
                )}
            >
                <div
                    className={cn(
                        "leading-tight space-y-[8px] mb-[30px]",
                        "lg:mb-[100px]"
                    )}
                >
                    <p
                        className={cn(
                            "uppercase text-[16px] text-zinc-800 font-semibold",
                            "lg:text-[20px]"
                        )}
                    >
                        Danh mục
                    </p>

                    <h1
                        className={cn(
                            "text-[30px] text-theme-main font-bold",
                            "sm:text-[40px]",
                            "md:text-[50px]",
                        )}
                    >
                        Tên sản phẩm
                    </h1>
                </div>

                <div
                    className={cn(
                        "space-y-[6px]",
                        "lg:mb-[40px]"
                    )}
                >
                    <p
                        className={cn(
                            "text-[16px] font-medium",
                            "md:text-[18px]"
                        )}
                    >
                        Giới thiệu sản phẩm
                    </p>

                    <p
                        className={cn(
                            "text-[14px] text-zinc-500 truncate-2",
                            "md:text-[16px] md:un-truncate"
                        )}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda quia sit nostrum inventore at impedit commodi quos nobis, voluptates vero accusamus tenetur neque, doloribus voluptatum quis cum.
                    </p>
                </div>

                <div
                    className={cn(
                        "hidden gap-[10px]",
                        "lg:flex"
                    )}
                >
                    <Button
                        className="btn-lg"
                        onClick={() => { handleOpenDialog("buyNow") }}
                    >
                        <MdOutlineShoppingBag className="!size-5" />
                        Mua ngay
                    </Button>

                    <Button
                        className="btn-lg bg-theme-main hover:bg-theme-main/95"
                        onClick={() => { handleOpenDialog("addToCart") }}
                    >
                        <FiShoppingCart className="!size-5" />
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>

            {isOpenDialog && <HeroDialogProductOptions open={isOpenDialog} onOpenChange={setIsOpenDialog} action={action} />}
        </>
    )
}

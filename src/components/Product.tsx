import Link from "next/link";

import Price from "@/components/Price";
import { FaStar } from "react-icons/fa6";

import { cn } from "@/lib/utils";

export default function Product() {
    return (
        <Link href="/products/product-id">
            <article className="w-full rounded-[10px] cursor-pointer">
                <figure className="group relative w-full aspect-square rounded-[10px] bg-zinc-300">
                    <div className="absolute right-[15px] top-[15px] flex items-center gap-[10px] px-[10px] py-[8px] rounded-full bg-zinc-800">
                        <Price className="text-white" />
                    </div>
                </figure>

                <div className="space-y-[10px] p-[15px]">
                    <div className="flex items-center justify-between">
                        <p className={cn(
                            "text-[14px] font-medium",
                            "sm:text-[16px]"
                        )}>
                            Tên sản phẩm
                        </p>

                        <div className="flex items-center gap-[8px]">
                            <p
                                className={cn(
                                    "text-[14px] text-zinc-600 font-medium leading-tight",
                                    "sm:text-[15px]"
                                )}
                            >
                                4.9
                            </p>
                            <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}
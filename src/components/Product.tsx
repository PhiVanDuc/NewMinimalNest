import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";

export default function Product() {
    return (
        <article className="w-full rounded-[10px] cursor-pointer">
            <figure className="group relative w-full aspect-square rounded-[10px] bg-zinc-300">
                <div className="absolute right-[15px] top-[15px] flex items-center gap-[10px] px-[10px] py-[8px] rounded-full bg-zinc-800 text-white">
                    <IoMdPricetag
                        className={cn(
                            "text-[16px]",
                            "sm:text-[18px]"
                        )}
                    />

                    <p
                        className={cn(
                            "text-[12px]",
                            "sm:text-[13px]"
                        )}
                    >
                        999,000 VNĐ
                    </p>
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
                            4,9
                        </p>
                        <FaStar className="text-[18px] text-amber-500 translate-y-[-1.5px]" />
                    </div>
                </div>
            </div>
        </article>
    )
}
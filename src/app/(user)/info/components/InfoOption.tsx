"use client"

import { usePathname } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";

export default function InfoOption() {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                "shrink-0 w-full h-fit p-[20px] rounded-[10px] border border-zinc-300",
                "xl:sticky xl:top-[100px] xl:w-[340px]"
            )}
        >
            <header className="mb-[20px]">
                <h2 className="text-[16px] font-semibold">Thông tin</h2>
                <p className="desc-basic">Lựa chọn các mục dưới để xem thông tin.</p>
            </header>

            <div className="flex flex-col space-y-[5px]">
                <Link
                    href="/info"
                    className={cn(
                        "px-[15px] py-[12px] rounded-[10px] hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors duration-300",
                        pathname === "/info" ? "bg-zinc-800 hover:bg-zinc-800/95 text-white" : ""
                    )}
                >
                    Cá nhân
                </Link>

                <Link
                    href="/info/book-address"
                    className={cn(
                        "px-[15px] py-[12px] rounded-[10px] hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors duration-300",
                        pathname.startsWith("/info/book-address") ? "bg-zinc-800 hover:bg-zinc-800/95 text-white" : ""
                    )}
                >
                    Sổ địa chỉ
                </Link>

                <Link
                    href="/info/orders"
                    className={cn(
                        "px-[15px] py-[12px] rounded-[10px] hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors duration-300",
                        pathname.startsWith("/info/orders") ? "bg-zinc-800 hover:bg-zinc-800/95 text-white" : ""
                    )}
                >
                    Đơn hàng
                </Link>

                <Link
                    href="/info/return-orders"
                    className={cn(
                        "px-[15px] py-[12px] rounded-[10px] hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors duration-300",
                        pathname.startsWith("/info/return-orders") ? "bg-zinc-800 hover:bg-zinc-800/95 text-white" : ""
                    )}
                >
                    Đơn hoàn trả
                </Link>
            </div>
        </div>
    )
}

"use client"

import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import dynamic from "next/dynamic";
const PaymentAddressDialog = dynamic(() => import("@/app/(user)/payment/components/PaymentAddressDialog"), { ssr: false });

import { FaBook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

export default function PaymentAddress() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <div className="space-y-[20px]">
            <header>
                <h2 className="sub-header-basic">Địa chỉ</h2>
                <p className="desc-basic">Bạn có thể chọn một địa chỉ khác trong danh sách địa chỉ của mình.</p>
            </header>

            <div className="flex items-stretch gap-[15px]">
                <span className="self-stretch shrink-0 my-[4px] w-[3px] rounded-full bg-theme-main" />

                <div className="flex items-start justify-between w-full">
                    <div className="space-y-[12px]">
                        <p
                            className={cn(
                                "text-[15px] font-medium capitalize truncate-2",
                                "sm:text-[17px]"
                            )}
                        >
                            Tên người mua
                        </p>

                        <div>
                            <p className="desc-basic">+84328895451</p>
                            <p className="desc-basic truncate-2">Chi tiết địa chỉ của người mua . . .</p>
                        </div>
                    </div>

                    <Button
                        className="shrink-0 bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                        onClick={() => { setIsOpenDialog(true); }}
                    >
                        <IoReloadOutline />
                        <span className="hidden sm:inline-block">Đổi địa chỉ</span>
                    </Button>
                </div>
            </div>

            {/* <div className="p-[15px] bg-zinc-100 rounded-[10px] space-y-[15px]">
                <div className="space-y-[2px]">
                    <p
                        className={cn(
                            "text-[14px] font-medium truncate-1",
                            "sm:text-[15px]"
                        )}
                    >
                        Sổ địa chỉ rỗng
                    </p>

                    <p className="desc-basic">Sổ địa chỉ của bạn hiện chưa có địa chỉ nào. Hãy thêm một địa chỉ mới để bắt đầu sử dụng.</p>
                </div>

                <Button asChild>
                    <Link href="/profile/book-address">
                        <FaBook />
                        Sổ địa chỉ
                    </Link>
                </Button>
            </div> */}

            {isOpenDialog && <PaymentAddressDialog isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />}
        </div>
    )
}

"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const AddressFormDialog = dynamic(() => import("@/app/(user)/info/book-address/components/AddressFormDialog"), { ssr: false });

import { Button } from "@/components/ui/button";

import { IoReloadOutline } from "react-icons/io5";
import { PiTrashSimpleBold } from "react-icons/pi";

import { cn } from "@/lib/utils";

export default function Address() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <div className="flex flex-col gap-[15px] rounded-[10px] border border-zinc-300">
            <div className="flex-1 space-y-[12px] p-[15px] pb-0">
                <p
                    className={cn(
                        "text-[15px] font-medium capitalize",
                        "sm:text-[16px]"
                    )}
                >
                    Tên người mua
                </p>

                <div>
                    <p className="desc-basic">+84328895451</p>
                    <p className="desc-basic">Chi tiết địa chỉ của người mua . . .</p>
                </div>
            </div>

            <div className="flex justify-end gap-[5px] p-[15px] pt-0">
                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    onClick={() => { setIsOpenDialog(true); }}
                >
                    <IoReloadOutline />
                    Cập nhật địa chỉ
                </Button>

                <Button className="bg-transparent hover:bg-zinc-100 text-zinc-800">
                    <PiTrashSimpleBold />
                    Xoá
                </Button>
            </div>

            {
                isOpenDialog &&
                (
                    <AddressFormDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        action="edit"
                    />
                )
            }
        </div>
    )
}

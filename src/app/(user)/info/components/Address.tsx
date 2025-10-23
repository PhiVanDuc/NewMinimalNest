"use client"

import { useState } from "react";

import AddressFormDialog from "@/app/(user)/info/components/AddressFormDialog";
import { Button } from "@/components/ui/button";

import { FiEdit2 } from "react-icons/fi";
import { PiTrashSimpleBold } from "react-icons/pi";

import { cn } from "@/lib/utils";

export default function Address() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <div className="flex flex-col gap-[15px] rounded-[10px] border border-zinc-200">
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
                <Button className="bg-transparent hover:bg-zinc-100 text-zinc-800">
                    <PiTrashSimpleBold />
                    Xoá
                </Button>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    onClick={() => { setIsOpenDialog(true); }}
                >
                    <FiEdit2 />
                    Chỉnh sửa
                </Button>
            </div>

            <AddressFormDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
                action="edit"
            />
        </div>
    )
}

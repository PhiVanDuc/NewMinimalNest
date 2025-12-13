"use client"

import type { Dispatch, SetStateAction } from "react";

import DialogBase from "@/components/DialogBase";

import { Button } from "@/components/ui/button";
import { PiTrashSimpleBold } from "react-icons/pi";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    handleClickDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    object?: string,
    isLoading?: boolean
}

export default function ConfirmDeleteDialog({ isOpen, setIsOpen, handleClickDelete, object, isLoading }: PropsType) {
    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title={`Xác nhận xoá ${object && object}`}
            desc={`Vui lòng kiểm tra và xác nhận lại bạn có thực sự muốn xoá ${object && object} hay không?`}
        >
            <div className="flex justify-end gap-[5px] px-[20px]">
                <Button
                    variant="ghost"
                    className="text-zinc-700"
                    onClick={() => { setIsOpen(false) }}
                >
                    Huỷ xoá
                </Button>

                <Button
                    className="bg-theme-main hover:bg-theme-main/95"
                    onClick={handleClickDelete}
                    disabled={isLoading}
                >
                    <PiTrashSimpleBold />
                    {isLoading ? "Đang xoá . . ." : "Xác nhận xoá"}
                </Button>
            </div>
        </DialogBase>
    )
}
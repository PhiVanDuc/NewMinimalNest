"use client"

import type { Dispatch, SetStateAction } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { PiTrashSimpleBold } from "react-icons/pi";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function DialogDeleteConfirm({ isOpen, setIsOpen }: PropsType) {
    const handleClickDelete = () => {
        setIsOpen(false);
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xoá</DialogTitle>
                    <DialogDescription>Vui lòng kiểm tra và xác nhận lại bạn có thực sự muốn xoá hay không?</DialogDescription>
                </DialogHeader>

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
                    >
                        <PiTrashSimpleBold />
                        Xác nhận xoá
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

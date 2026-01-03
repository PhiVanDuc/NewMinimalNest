"use client"

import type { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { PiTrashSimpleBold } from "react-icons/pi";

interface Props {
    open: boolean,
    onOpenChange: Dispatch<SetStateAction<boolean>>,
    handleClickDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    object?: string,
    isLoading?: boolean
}

export default function DialogConfirmDelete({ open, onOpenChange, handleClickDelete, object, isLoading }: Props) {
    const handleClickCloseDialog = () => onOpenChange(false);

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Xác nhận xoá {object}</DialogTitle>
                    <DialogDescription>Vui lòng kiểm tra và xác nhận lại bạn có muốn xoá {object} hay không?</DialogDescription>
                </DialogHeader>

                <div className="flex justify-end gap-[5px] px-[20px]">
                    <Button
                        variant="ghost"
                        className="text-zinc-700"
                        onClick={handleClickCloseDialog}
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
            </DialogContent>
        </Dialog>
    )
}
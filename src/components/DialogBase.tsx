"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    readonly children: React.ReactNode,
    open: boolean,
    onOpenChange: Dispatch<SetStateAction<boolean>>,
    title?: string,
    desc?: string
}

export default function DialogBase({
    children,
    open,
    onOpenChange,
    title,
    desc
}: PropsType) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{desc}</DialogDescription>
                </DialogHeader>

                {children}
            </DialogContent>
        </Dialog>
    )
}
"use client"

import { Dispatch, SetStateAction } from "react";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle
} from "@/components/ui/drawer";

import { cn } from "@/lib/utils";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ProductImageMore({ isOpen, setIsOpen }: PropsType) {
    return (
        <Drawer
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DrawerContent className="flex flex-col gap-0 h-[85dvh]">
                <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div
                    className={cn(
                        "flex-1 px-[20px] pb-[20px] grid grid-cols-1 gap-[10px] overflow-y-auto",
                        "md:grid-cols-2",
                        "xl:grid-cols-3"
                    )}
                >
                    <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                    <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                    <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                    <div className="w-full aspect-square rounded-[10px] bg-zinc-300 hover:scale-[0.97] transition-transform cursor-pointer" />
                </div>
            </DrawerContent>
        </Drawer>
    )
}

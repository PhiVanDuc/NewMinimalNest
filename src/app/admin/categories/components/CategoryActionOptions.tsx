"use client"

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import dynamic from "next/dynamic";
const DialogConfirmDelete = dynamic(() => import("@/components/DialogConfirmDelete"), { ssr: false, loading: () => <></> });

import Link from "next/link";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";
import { PiTrashSimpleBold } from "react-icons/pi";

import { toast } from "@pheralb/toast";
import { adminDeleteCategory } from "@/services/categories/admin";

interface Props {
    id: string
}

export default function CategoryActionOptions({ id }: Props) {
    const queryClient = useQueryClient();
    const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const mutation = useMutation({
        mutationFn: () => adminDeleteCategory(id),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminCategories"] });
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.log("useMutation");
            console.log(error);
            toast.error({ text: "Thất bại", description: error.message });
        },
        onSettled: () => {
            setIsOpenDialog(false);
            setIsOpenDropdownMenu(false);
        }
    });

    const handleClickDelete = () => mutation.mutate();

    return (
        <div className="flex justify-center">
            <DropdownMenu
                open={isOpenDropdownMenu}
                onOpenChange={setIsOpenDropdownMenu}
            >
                <DropdownMenuTrigger className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                    <HiDotsVertical
                        size={18}
                        className="text-zinc-700"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href={`/admin/categories/update/${id}`}>
                            <IoReloadOutline />
                            Cập nhật
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={() => { setIsOpenDialog(true) }}
                    >
                        <PiTrashSimpleBold />
                        Xoá
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {
                isOpenDialog &&
                (
                    <DialogConfirmDelete
                        open={isOpenDialog}
                        onOpenChange={setIsOpenDialog}
                        handleClickDelete={handleClickDelete}
                        object="danh mục"
                        isLoading={mutation.isPending}
                    />
                )
            }
        </div>
    )
}
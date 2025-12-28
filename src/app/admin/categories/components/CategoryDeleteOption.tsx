"use client"

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import dynamic from "next/dynamic";
const DialogConfirmDelete = dynamic(() => import("@/components/DialogConfirmDelete"), { ssr: false, loading: () => <></> });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PiTrashSimpleBold } from "react-icons/pi";

import { toast } from "@pheralb/toast";
import { adminDeleteCategory } from "@/services/categories/admin";

import type { Dispatch, SetStateAction } from "react";

interface PropsType {
    id: string,
    setIsOpenDropdownMenu: Dispatch<SetStateAction<boolean>>
}

export default function CategoriesDeleteAction({ id, setIsOpenDropdownMenu }: PropsType) {
    const queryClient = useQueryClient();
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const mutation = useMutation({
        mutationFn: (id: string) => adminDeleteCategory(id),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminCategories"] });
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            toast.error({ text: "Thất bại", description: error.message });
        },
        onSettled: () => {
            setIsOpenDialog(false);
            setIsOpenDropdownMenu(false);
        }
    });

    const handleClickDelete = () => mutation.mutate(id); 

    return (
        <>
            <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                onClick={() => { setIsOpenDialog(true) }}
            >
                <PiTrashSimpleBold />
                <span>Xoá</span>
            </DropdownMenuItem>

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
        </>
    )
}

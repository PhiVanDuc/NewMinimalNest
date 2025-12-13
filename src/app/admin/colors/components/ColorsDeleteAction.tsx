"use client"

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import dynamic from "next/dynamic";
const ConfirmDeleteDialog = dynamic(() => import("@/components/ConfirmDeleteDialog"), { ssr: false, loading: () => <></> });

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PiTrashSimpleBold } from "react-icons/pi";

import { toast } from "@pheralb/toast";
import { adminDeleteColor } from "@/services/colors/admin";

interface PropsType {
    id: string
}

export default function ColorsDeleteAction({ id }: PropsType) {
    const queryClient = useQueryClient();
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const mutation = useMutation({
        mutationFn: (id: string) => adminDeleteColor(id),
        onSuccess: ({ success, message }) => {
            setIsOpenDialog(false);

            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminColors"] });
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    return (
        <>
            <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                onClick={() => { setIsOpenDialog(true) }}
            >
                <PiTrashSimpleBold />
                Xoá
            </DropdownMenuItem>

            {
                isOpenDialog && (
                    <ConfirmDeleteDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        handleClickDelete={() => mutation.mutate(id)}
                        object="màu sắc"
                        isLoading={mutation.isPending}
                    />
                )
            }
        </>
    )
}

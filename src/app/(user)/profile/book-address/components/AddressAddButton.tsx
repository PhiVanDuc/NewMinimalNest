"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const AddressAddFormDialog = dynamic(() => import("@/app/(user)/info/book-address/components/AddressAddFormDialog"), { ssr: false });

import { Plus } from "lucide-react";

export default function AddressAddButton() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <button
                className='flex items-center justify-center gap-[10px] w-full h-full p-[15px] rounded-[10px] border border-zinc-300 bg-transparent hover:bg-zinc-50 transition-colors cursor-pointer'
                onClick={() => { setIsOpenDialog(true); }}
            >
                <div className="flex items-center justify-center rounded-full size-[40px] bg-zinc-100 text-zinc-600">
                    <Plus size={20} />
                </div>

                <span className="desc-basic">Thêm mới địa chỉ</span>
            </button>

            {
                isOpenDialog &&
                (
                    <AddressAddFormDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        action="add"
                    />
                )
            }
        </>
    )
}

"use client"

import { useState } from "react";
import { useWatch } from "react-hook-form";

import dynamic from "next/dynamic";
const ProductAddCategoryListDialog = dynamic(() => import("@/app/admin/products/add/components/ProductAddCategoryListDialog"), { ssr: false });

import Badge from "@/components/Badge";
import { FaPlus } from "react-icons/fa6";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export default function ProductAddCategoryList({ form }: PropsType) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const watchCategories = useWatch({
        control: form.control,
        name: "categories"
    });

    return (
        <>
            <div className="space-y-[10px]">
                <label className="block text-[14px] text-zinc-700 font-medium leading-none">Danh mục</label>

                <div className="flex flex-wrap gap-[6px]">
                    {
                        watchCategories.map((category, index) => {
                            return (
                                <Badge
                                    key={index}
                                    variant="outline"
                                >
                                    <p>{category.name}</p>
                                </Badge>
                            )
                        })
                    }

                    <Badge
                        variant="outline"
                        className="cursor-pointer"
                        onClick={() => { setIsOpenDialog(true) }}
                    >
                        <div className="flex items-center gap-[10px]">
                            <FaPlus className="text-[12px]" />
                            <p>Lựa chọn danh mục</p>
                        </div>
                    </Badge>
                </div>
            </div>

            {
                isOpenDialog && (
                    <ProductAddCategoryListDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        form={form}
                    />
                )
            }
        </>
    )
}

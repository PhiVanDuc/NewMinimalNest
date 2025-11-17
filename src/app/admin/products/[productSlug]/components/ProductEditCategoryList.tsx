"use client"

import { useState } from "react";
import { useWatch } from "react-hook-form";

import dynamic from "next/dynamic";
const ProductAddCategoryListDialog = dynamic(() => import("@/app/admin/products/add/components/ProductAddCategoryListDialog"), { ssr: false });

import Badge from "@/components/Badge";

import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/products/add/page";

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
            <FormField
                control={form.control}
                name="categories"
                render={({ fieldState }) => {
                    return (
                        <FormItem>
                            <FormLabel>Danh mục</FormLabel>

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
                                    className={cn(
                                        "cursor-pointer",
                                        fieldState.error ? "border-destructive" : ""
                                    )}
                                    onClick={() => { setIsOpenDialog(true) }}
                                >
                                    <div className="flex items-center gap-[10px]">
                                        <FaPlus className="text-[12px]" />
                                        <p>Lựa chọn danh mục</p>
                                    </div>
                                </Badge>
                            </div>

                            <FormMessage />
                        </FormItem>
                    )
                }}
            />

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

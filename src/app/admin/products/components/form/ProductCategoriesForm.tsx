"use client"

import { useState } from "react";
import { useWatch, useFieldArray } from "react-hook-form";

import dynamic from "next/dynamic";
const BadgePickerDialog = dynamic(() => import("@/components/BadgePickerDialog"), { ssr: false });

import Badge from "@/components/Badge";

import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { categories } from "@/consts/filter";

import type { UseFormReturn } from "react-hook-form";
import type { ProductFormDataType } from "@/app/admin/products/types";

interface PropsType {
    form: UseFormReturn<ProductFormDataType>
}

export default function ProductCategoriesForm({ form }: PropsType) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const watchCategories = useWatch({
        control: form.control,
        name: "categories"
    });

    const fieldCategories = useFieldArray({
        control: form.control,
        name: "categories",
        keyName: "_id"
    });

    const handleSelectCategory = (badge: { label: string, value: string }) => {
        const category = {
            name: badge.label,
            slug: badge.value
        }

        const index = watchCategories.findIndex(wCategory => wCategory.slug === category.slug);

        if (index !== -1) fieldCategories.remove(index);
        else fieldCategories.append(category);
    }

    return (
        <>
            <FormField
                control={form.control}
                name="categories"
                render={({ fieldState }) => {
                    return (
                        <FormItem>
                            <FormLabel isRequired={true}>Danh mục</FormLabel>

                            <div className="flex flex-wrap gap-[6px]">
                                {
                                    watchCategories.map(category => {
                                        return (
                                            <Badge
                                                key={category.slug}
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
                    <BadgePickerDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        object="danh mục"
                        options={categories.map(category => ({ label: category.label, value: category.value }))}
                        selectedOptions={watchCategories.map(category => ({ label: category.name, value: category.slug }))}
                        onSelect={handleSelectCategory}
                    />
                )
            }
        </>
    )
}
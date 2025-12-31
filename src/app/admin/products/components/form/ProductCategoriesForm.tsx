"use client"

import { useState } from "react";
import { useWatch, useFieldArray } from "react-hook-form";

import dynamic from "next/dynamic";
const BadgePickerDialog = dynamic(() => import("@/components/DialogBadgePicker"), { ssr: false });

import Badge from "@/components/Badge";

import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";

import { cn } from "@/libs/utils";
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

    const handleSelectCategory = (value: string) => {
        const category = categories.find(category => category.value === value);
        if (!category) return;

        const index = watchCategories.findIndex(wCategory => wCategory.slug === category.value);

        if (index !== -1) fieldCategories.remove(index);
        else fieldCategories.append({ name: category.label, slug: category.value });
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
                        open={isOpenDialog}
                        onOpenChange={setIsOpenDialog}
                        badges={categories.map(category => ({ label: category.label, value: category.value }))}
                        values={watchCategories.map(category => category.slug)}
                        onSelect={handleSelectCategory}
                        object="danh mục"
                    />
                )
            }
        </>
    )
}
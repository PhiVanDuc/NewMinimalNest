"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWatch, useFieldArray } from "react-hook-form";

import dynamic from "next/dynamic";
const BadgePickerDialog = dynamic(() => import("@/components/DialogBadgePicker"), { ssr: false });

import Error from "@/components/Error";
import Badge from "@/components/Badge";
import Loading from "@/components/Loading";

import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";

import { cn } from "@/libs/utils";
import { publicGetCategories } from "@/services/categories/public";

import type { UseFormReturn } from "react-hook-form";
import type { ProductForm } from "@/app/admin/products/components/form/ProductForm";

interface Props {
    form: UseFormReturn<ProductForm>
}

export default function ProductCategoriesForm({ form }: Props) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const query = useQuery({
        queryKey: ["categories"],
        queryFn: () => publicGetCategories()
    });

    const isLoading = query.isPending;
    const isError = query.error || !query.data?.success;
    const categories = query.data?.data?.categories?.map(category => ({ label: category.name, value: category.id })) || [];

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
        const category = query.data?.data?.categories.find(category => category.id === value);
        if (!category) return;

        const index = watchCategories.findIndex(wCategory => wCategory.id === category.id);

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

                            {
                                isLoading ? <Loading /> :
                                    isError ? <Error /> :
                                        (
                                            <div className="flex flex-wrap gap-[6px]">
                                                {
                                                    watchCategories.map(category => {
                                                        return (
                                                            <Badge key={category.id} variant="outline">
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
                                                        Lựa chọn danh mục
                                                    </div>
                                                </Badge>
                                            </div>
                                        )
                            }
                            
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
                        badges={categories}
                        values={watchCategories.map(category => category.id)}
                        onSelect={handleSelectCategory}
                        object="danh mục"
                    />
                )
            }
        </>
    )
}
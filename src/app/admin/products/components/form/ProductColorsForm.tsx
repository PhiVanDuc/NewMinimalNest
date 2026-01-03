"use client"

import { useQuery } from "@tanstack/react-query";
import { useWatch, useFieldArray } from "react-hook-form";

import Error from "@/components/Error";
import Loading from "@/components/Loading";

import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { cn } from "@/libs/utils";
import { publicGetColors } from "@/services/colors/public";

import type { UseFormReturn } from "react-hook-form";
import type { ColorDataType } from "@/app/admin/colors/types";
import type { ProductFormDataType } from "@/app/admin/products/types";

interface Props {
    form: UseFormReturn<ProductFormDataType>
}

export default function ProductColorsForm({ form }: Props) {
    const query = useQuery({
        queryKey: ["colors"],
        queryFn: () => publicGetColors()
    });

    const isLoading = query.isPending;
    const isError = query.error || !query.data?.success;
    const colors = query.data?.data?.colors || [];

    const watchColor = useWatch({
        control: form.control,
        name: "color"
    });

    const watchColors = useWatch({
        control: form.control,
        name: "colors"
    });

    const fieldColors = useFieldArray({
        control: form.control,
        name: "colors",
        keyName: "_id"
    });

    const watchImages = useWatch({
        control: form.control,
        name: "images"
    });

    const fieldImages = useFieldArray({
        control: form.control,
        name: "images",
        keyName: "_id"
    });

    const handleClickChooseColor = (color: ColorDataType) => {
        const index = watchColors.findIndex(wColor => wColor.id === color.id);

        if (index === -1) {
            form.setValue("color", color);
            fieldColors.append(color);
        }
        else {
            if (watchColor && (watchColors[index].id === watchColor.id)) {
                const newWatchColors = watchColors.filter(wColor => wColor.id !== color.id);
                form.setValue("color", newWatchColors.length > 0 ? newWatchColors[0] : undefined);
            }

            const filterdImages = watchImages
                .map((image, index) => ({ index: index, ...image }))
                .filter(image => image.colorId === color.id);

            for (let i = filterdImages.length - 1; i >= 0; i--) fieldImages.remove(filterdImages[i].index);
            fieldColors.remove(index);
        }
    }

    return (
        <FormField
            control={form.control}
            name="colors"
            render={() => {
                return (
                    <FormItem>
                        <FormLabel isRequired={true}>Màu sắc</FormLabel>

                        {
                            isLoading ? <Loading /> :
                                isError ? <Error /> :
                                    (
                                        <div className="flex flex-wrap gap-[15px]">
                                            {
                                                colors.map(color => {
                                                    const isSelected = watchColors.find(wColor => wColor.id === color.id);

                                                    return (
                                                        <div
                                                            key={color.id}
                                                            className={cn(
                                                                "size-[25px] rounded-full outline-[3px] outline-offset-[2px] transition-colors cursor-pointer",
                                                                isSelected ? "outline-zinc-200" : "outline-zinc-100 hover:outline-zinc-200"
                                                            )}
                                                            style={{ backgroundColor: color.colorCode }}
                                                            onClick={() => handleClickChooseColor(color)}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                        }

                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}
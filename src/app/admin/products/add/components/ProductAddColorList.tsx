"use client"

import { useWatch, useFieldArray } from "react-hook-form";
import { colors as filterColors } from "@/consts/filter";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";

import { cn } from "@/lib/utils";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export default function ProductAddColorList({ form }: PropsType) {
    const colors = filterColors.map(color => ({
        name: color.label,
        slug: color.value,
        colorCode: color.colorCode
    }));

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

    const handleClickChooseColor = (color: { name: string, slug: string, colorCode: string }) => {
        const indexColor = watchColors.findIndex(wColor => wColor.slug === color.slug);

        if (indexColor === -1) {
            form.setValue("color", color);
            fieldColors.append(color);
        }
        else {
            if (watchColor && (watchColors[indexColor].slug === watchColor.slug)) {
                const newWatchColors = watchColors.filter(wColor => wColor.slug !== color.slug);
                form.setValue("color", newWatchColors.length > 0 ? newWatchColors[0] : undefined);
            }

            const filterdImages = watchImages
                .map((image, index) => ({ index: index, ...image }))
                .filter(image => image.colorSlug === color.slug);

            for (let i = filterdImages.length - 1; i >= 0; i--) {
                fieldImages.remove(filterdImages[i].index);
            }

            fieldColors.remove(indexColor);
        }
    }

    return (
        <div className="space-y-[10px]">
            <label className="block text-[14px] text-zinc-700 font-medium leading-none">Màu sắc</label>

            <div className="flex flex-wrap gap-[15px]">
                {
                    colors.map(color => {
                        const isActive = watchColors.find(wColor => wColor.slug === color.slug);

                        return (
                            <div
                                key={color.slug}
                                className={cn(
                                    "size-[25px] rounded-full outline-[3px] outline-offset-[2px] transition-colors cursor-pointer",
                                    isActive ? "outline-zinc-200" : "outline-zinc-100 hover:outline-zinc-200"
                                )}
                                style={{ backgroundColor: color.colorCode }}
                                onClick={() => { handleClickChooseColor(color) }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
"use client"

import { useMemo } from "react";
import { useFieldArray, useWatch } from "react-hook-form";

import Image from "next/image";
import Header from "@/components/Header";

import { IoMdImages } from "react-icons/io";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";

import { cn } from "@/lib/utils";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export default function ProductEditListImage({ form }: PropsType) {
    const watchImages = useWatch({
        control: form.control,
        name: "images"
    });

    const fieldImages = useFieldArray({
        control: form.control,
        name: "images",
        keyName: "_id"
    });

    const watchColors = useWatch({
        control: form.control,
        name: "colors"
    });

    const watchColor = useWatch({
        control: form.control,
        name: "color"
    });

    const sortedSameImage = watchImages.filter(wImage => watchColor && (wImage.colorSlug === watchColor.slug));

    const handleChooseImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.files;

        if (!images) return;
        if (!watchColor) return;

        Array.from(images).forEach(image => {
            let passCondition = false;
            let type: "main" | "sub" | "normal" = "normal";

            if (!sortedSameImage.some(image => image.type === "main") && !passCondition) {
                type = "main";
                passCondition = true;
            }
            else if ((sortedSameImage.filter(image => image.type === "sub").length < 2) && !passCondition) {
                type = "sub";
            }

            fieldImages.append({
                colorSlug: watchColor.slug,
                type,
                image
            });
        });

        e.target.value = "";
    };

    return (
        <div className="p-[20px] space-y-[40px] w-[30%] rounded-[10px] border border-zinc-300">
            <Header isBreadcrumb={false}>
                <h2 className="sub-header-basic">Cung cấp ảnh</h2>
                <p className="desc-basic">Vui lòng chọn màu sắc để cung cấp ảnh cho sản phẩm.</p>
            </Header>

            {
                watchColors.length === 0 ?
                    (
                        <div className="flex justify-center p-[20px] rounded-[10px] bg-zinc-100">
                            <p className="desc-basic">Vui lòng chọn màu sắc cho sản phẩm.</p>
                        </div>
                    ) :
                    (
                        <div className="space-y-[40px]">
                            <div className="space-y-[10px]">
                                <label className="block text-[14px] text-zinc-700 font-medium leading-none">Màu sắc</label>

                                <div className="flex flex-wrap gap-[15px]">
                                    {
                                        watchColors.map((color, index) => {
                                            const isExist = watchColor?.slug === color.slug;

                                            return (
                                                <div
                                                    key={index}
                                                    className={cn(
                                                        "size-[25px] rounded-full outline-[3px] outline-offset-[2px] transition-colors cursor-pointer",
                                                        isExist ? "outline-zinc-200" : "outline-zinc-100 hover:outline-zinc-200"
                                                    )}
                                                    style={{ backgroundColor: color.colorCode }}
                                                    onClick={() => { form.setValue("color", color) }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[10px] transition-all">
                                <label
                                    className="group flex flex-col items-center justify-center gap-[10px] w-full aspect-square rounded-[10px] bg-transparent hover:bg-zinc-100 border border-zinc-300 transition-colors cursor-pointer"
                                >
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        hidden
                                        onChange={handleChooseImages}
                                    />

                                    <div className="flex items-center justify-center rounded-full size-[50px] bg-zinc-100 group-hover:bg-white text-zinc-600">
                                        <IoMdImages size={30} />
                                    </div>
                                </label>

                                {
                                    sortedSameImage.map((image, index) => {
                                        const src = typeof image.image === "string" ? image.image : URL.createObjectURL(image.image);

                                        return (
                                            <div
                                                key={index}
                                                className="group relative cursor-pointer"
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`Product Image ${index}`}
                                                    width={800}
                                                    height={800}
                                                    className="w-full aspect-square object-cover object-center rounded-[10px]"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

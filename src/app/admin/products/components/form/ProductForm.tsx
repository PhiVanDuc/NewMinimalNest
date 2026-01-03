"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductGeneralForm from "@/app/admin/products/components/form/ProductGeneralForm";
import ProductDiscountForm from "@/app/admin/products/components/form/ProductDiscountForm";
import ProductCategoriesForm from "@/app/admin/products/components/form/ProductCategoriesForm";
import ProductColorsForm from "@/app/admin/products/components/form/ProductColorsForm";
import ProductImagesForm from "@/app/admin/products/components/form/ProductImagesForm";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import productSchema from "@/schema/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import imageCompression from 'browser-image-compression';

import type { ProductDataType, ProductFormDataType } from "@/app/admin/products/types";

interface Props {
    formType: "add" | "update",
    data?: ProductDataType
}

export default function ProductForm({ formType, data }: Props) {
    const [compressing, setCompressing] = useState({ status: false, progress: 0 });

    const form = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "Tên sản phẩm",
            desc: "Mô tả sản phẩm",
            costPrice: "1.000.000",
            interestPercent: "80",
            discountType: "percent",
            discount: "",
            price: "",
            categories: [],
            colors: [],
            color: undefined,
            images: []
        }
    });

    const handleSubmit = async (data: ProductFormDataType) => {
        setCompressing(state => ({ ...state, status: true }));

        const totalImages = data.images.length;
        const progresses = Array(totalImages).fill(0);

        const images = await Promise.all(data.images.map(async (image, index) => {
            if (typeof image.image === "string") return image; 

            const compressedFile = await imageCompression(image.image, {
                maxSizeMB: 2,
                useWebWorker: true,
                onProgress: (progress) => {
                    progresses[index] = progress;
                    const totalProgress = progresses.reduce((a, b) => a + b, 0) / totalImages;
                    setCompressing(state => ({ ...state, progress: Math.round(totalProgress) }));
                }
            });

            return { ...image, image: compressedFile };
        }));

        setCompressing({ status: false, progress: 0 });
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm sản phẩm" :
                            formType === "update" ? "Cập nhật sản phẩm" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm sản phẩm tại đây." :
                            formType === "update" ? "Vui lòng cập nhật sản phẩm tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    className="flex gap-[40px]"
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <div className="space-y-[40px] w-[65%]">
                        <ProductGeneralForm form={form} />
                        <ProductDiscountForm form={form} />

                        <div className="relative pl-[24px] space-y-[20px]">
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

                            <ProductCategoriesForm form={form} />
                            <ProductColorsForm form={form} />
                        </div>

                        {
                            (formType === "add" || formType === "update") &&
                            (
                                <Button
                                    className="w-full bg-theme-main hover:bg-theme-main/95"
                                    disabled={compressing.status}
                                >
                                    {
                                        formType === "add" ?
                                            (
                                                <>
                                                    <FaPlus />
                                                    { compressing.status ? `Đang nén ảnh ${compressing.progress}%` : "Thêm sản phẩm" }
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <IoReloadOutline />
                                                    { compressing.status ? `Đang nén ảnh ${compressing.progress}%` : "Cập nhật sản phẩm" }
                                                </>
                                            )
                                    }
                                </Button>
                            )
                        }
                    </div>

                    <ProductImagesForm form={form} />
                </form>
            </Form>
        </div>
    )
}
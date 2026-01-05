"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

import { toast } from "@pheralb/toast";
import productSchema from "@/schema/product-schema";
import DISCOUNT_TYPES from "@/consts/discount-types";
import { zodResolver } from "@hookform/resolvers/zod";
import imageCompression from 'browser-image-compression';
import { adminAddProduct } from "@/services/products/admin";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { AdminAddProductData } from "@/services/products/admin";

export interface ProductForm {
    name: string,
    desc: string,
    costPrice: string,
    interestPercent: string,
    discountType: DiscountType,
    discount: string,
    price: string,
    categories: Category[],
    colors: Color[],
    color?: Color,
    images: {
        id?: string,
        colorId: string,
        preview?: string,
        url?: string,
        image?: File,
        role: ProductImageRole
    }[]
}

interface Props {
    formType: "add" | "update",
    data?: Product
}

export default function ProductForm({ formType, data }: Props) {
    const queryClient = useQueryClient();
    const [compressing, setCompressing] = useState({ status: false, progress: 0 });

    const colors = data?.colors?.map(({ images, ...rest }) => rest);

    const images = data?.colors?.flatMap(color => {
        return color.images.map(img => {
            return {
                ...img,
                colorId: color.id
            }
        })
    });

    const form = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: data?.name || "Tên sản phẩm",
            desc: data?.desc || "Mô tả sản phẩm",
            costPrice: toStandardPositiveIntegerString(data?.costPrice?.toString()) || "1.000.000",
            interestPercent: toStandardPositiveIntegerString(data?.interestPercent?.toString()) || "80",
            discountType: data?.discountType || DISCOUNT_TYPES.PERCENT,
            discount: toStandardPositiveIntegerString(data?.discount?.toString()) || "",
            price: toStandardPositiveIntegerString(data?.price?.toString()) || "1.800.00",
            categories: data?.categories || [],
            colors: colors || [],
            color: undefined,
            images: images || []
        }
    });

    const mutation = useMutation({
        mutationFn: (data: AdminAddProductData) => adminAddProduct(data),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminColors"] });
                form.reset();
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.error("useMutation");
            console.error(error);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSubmit = async (data: ProductForm) => {
        // Thêm / cập nhật thông tin cơ bản

        const { images, color, ...rest } = data;
        const formatData = {
            ...rest,
            costPrice: Number(toPositiveIntegerString(data.costPrice)),
            interestPercent: Number(toPositiveIntegerString(data.interestPercent)),
            discount: Number(toPositiveIntegerString(data.discount)),
            price: Number(toPositiveIntegerString(data.price)),
        }

        mutation.mutateAsync(formatData);

        // Xử lý nén - chia nhiều ảnh sản phẩm thành nhiều batch - thêm / cập nhật ảnh theo batch

        // setCompressing(state => ({ ...state, status: true }));

        // const totalImages = data.images.length;
        // const progresses = Array(totalImages).fill(0);

        // const images = await Promise.all(data.images.map(async (image, index) => {
        //     if (!image.image) return image; 

        //     const compressedFile = await imageCompression(image.image as File, {
        //         maxSizeMB: 2,
        //         useWebWorker: true,
        //         onProgress: (progress) => {
        //             progresses[index] = progress;
        //             const totalProgress = progresses.reduce((a, b) => a + b, 0) / totalImages;
        //             setCompressing(state => ({ ...state, progress: Math.round(totalProgress) }));
        //         }
        //     });

        //     return { ...image, image: compressedFile };
        // }));

        // setCompressing({ status: false, progress: 0 });

        // const groupColorImages: Record<string, typeof images> = {};

        // images.forEach(image => {
        //     const colorImages =  groupColorImages[image.colorId];
        //     if (!colorImages) groupColorImages[image.colorId] = [image];
        //     else colorImages.push(image);
        // });

        // const batchColorImages = Object.values(groupColorImages);
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
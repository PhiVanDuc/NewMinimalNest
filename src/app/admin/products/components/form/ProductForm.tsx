"use client"

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

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
import { adminAddProduct, adminAddProductImages } from "@/services/products/admin";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";

interface Props {
    formType: "add" | "update",
    data?: ProductDetail
}

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
        blurUrl?: string,
        image?: File,
        role: ProductImageRole
    }[]
}

interface CompressImages {
    images: ProductForm["images"],
    setCompressing: Dispatch<SetStateAction<{
        isPending: boolean,
        progress: number
    }>>
}

const compressImages = async (images: CompressImages["images"], setCompressing: CompressImages["setCompressing"]) => {
    const totalImages = images.length;
    const progresses = Array(totalImages).fill(0);

    return await Promise.all(
        images.map(async (image, index) => {
            if (!image.image) return image;

            const options = {
                maxSizeMB: 2,
                useWebWorker: true,
                onProgress: (progress: number) => {
                    progresses[index] = progress;
                    const totalProgress = Math.round(progresses.reduce((prev, curr) => prev + curr, 0) / totalImages);
                    setCompressing(state => ({ ...state, progress: totalProgress }));
                }
            };

            const blob = await imageCompression(image.image, options);
            const name = image.image.name.substring(0, image.image.name.lastIndexOf('.'));
            const extension = blob.type.split('/')[1];

            const file = new File([blob], `${name}.${extension}`, {
                type: blob.type,
                lastModified: Date.now()
            });

            return { ...image, image: file };
        })
    );
}

const uploadBatchs = async (productId: string, images: ProductForm['images'], form: UseFormReturn<ProductForm>) => {
    let allSuccess = true;

    const batches = Object.values(
        images.reduce((acc, { preview, ...img }) => {
                if (!acc[img.colorId]) acc[img.colorId] = [];
                acc[img.colorId].push(img);
                return acc;
            },
            {} as Record<string, ProductForm['images']>
        )
    );

    for(let i = 0; i < batches.length; i += 2) {
        const outputs = await Promise.allSettled(batches.slice(i, i + 2).map(batch => {
            const formData = new FormData();

            batch.forEach(image => {
                formData.append("roles", image.role);
                formData.append("colorIds", image.colorId);
                if (image.image) formData.append("images", image.image);
                if (image.id) formData.append("ids", image.id);
            });

            return adminAddProductImages(productId, formData);
        }));

        outputs.forEach(output => {
            if (output.status !== 'fulfilled') {
                toast.error({ text: "Thất bại", description: output.reason, delayDuration: 20000 });
                allSuccess = false;
                return;
            }

            const { success, message, data } = output.value;

            if (!success) {
                toast.error({ text: "Thất bại", description: message, delayDuration: 20000 });
                allSuccess = false;
                return;
            }

            if (!data?.length) {
                toast.success({ text: "Thành công", description: message, delayDuration: 20000 });
                return;
            }

            data.forEach(item => {
                if (item.statusCode === 207) toast.warning({ text: "Thành công một phần", description: item.message, delayDuration: 20000 });
                else toast.success({ text: "Thành công", description: item.message, delayDuration: 20000 });
            });
        });
    }

    if (allSuccess) form.reset();
}

export default function ProductForm({ formType, data }: Props) {
    const [compressing, setCompressing] = useState({ isPending: false, progress: 0 });
    const isAddType = formType === "add";

    const initialValues = useMemo<ProductForm>(() => {
        const colors = data?.colors?.map(({ images, ...rest }) => rest);
        const images = data?.colors?.flatMap(color => {
            return color.images.map(image => ({ ...image, colorId: color.id }));
        });

        return {
            name: data?.name || "Tên sản phẩm",
            desc: data?.desc || "Mô tả sản phẩm",
            costPrice: toStandardPositiveIntegerString(data?.costPrice?.toString()) || "1.000.000",
            interestPercent: toStandardPositiveIntegerString(data?.interestPercent?.toString()) || "80",
            discountType: data?.discountType || DISCOUNT_TYPES.PERCENT,
            discount: toStandardPositiveIntegerString(data?.discount?.toString()) || "",
            price: toStandardPositiveIntegerString(data?.price?.toString()) || "1.800.00",
            categories: data?.categories || [],
            colors: colors  || [],
            color: colors?.[0],
            images: images  || []
        };
    }, [data]);

    const form = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: initialValues
    });

    const mutation = useMutation({
        mutationFn: async (data: ProductForm) => {
            // Nén ảnh
            setCompressing({ isPending: true, progress: 0 });
            const compressedImages = await compressImages(data.images, setCompressing);
            setCompressing({ isPending: false, progress: 0 });

            // Thêm sản phẩm
            const { images, color, price, ...rest } = data;
            const basicData = {
                ...rest,
                costPrice: Number(toPositiveIntegerString(data.costPrice)),
                interestPercent: Number(toPositiveIntegerString(data.interestPercent)),
                discount: Number(toPositiveIntegerString(data.discount))
            };

            const productOutput = await adminAddProduct(basicData);
            if (productOutput.success) toast.success({ text: "Thành công", description: productOutput.message });
            else throw new Error(productOutput.message);

            // Thêm ảnh sản phẩm
            await uploadBatchs(productOutput.data?.id as string, compressedImages, form);
        },
        onError: (error) => {
            console.log("useMutation");
            console.log(error);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSubmit = (data: ProductForm) => mutation.mutate(data);

    return (
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

                    <Button
                        className="w-full bg-theme-main hover:bg-theme-main/95"
                        disabled={compressing.isPending || mutation.isPending}
                    >
                        {
                            isAddType ?
                                (
                                    <>
                                        <FaPlus />
                                        {
                                            compressing.isPending ?
                                                `Đang nén ảnh ${compressing.progress}%` :
                                                mutation.isPending ?
                                                    "Đang thêm sản phẩm . . ." :
                                                    "Thêm sản phẩm"
                                        }
                                    </>
                                ) :
                                (
                                    <>
                                        <IoReloadOutline />
                                        {
                                            compressing.isPending ?
                                                `Đang nén ảnh ${compressing.progress}%` :
                                                mutation.isPending ?
                                                    "Đang cập nhật sản phẩm . . ." :
                                                    "Cập nhật sản phẩm"
                                        }
                                    </>
                                )
                        }
                    </Button>
                </div>

                <ProductImagesForm form={form} />
            </form>
        </Form>
    )
}
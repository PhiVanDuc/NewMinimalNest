"use client"

import { useFieldArray, useWatch } from "react-hook-form";

import Image from "next/image";
import Badge from "@/components/Badge";
import Header from "@/components/Header";

import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { IoMdImages, IoMdMore } from "react-icons/io";

import { cn } from "@/libs/utils";
import { toast } from "@pheralb/toast";
import IMAGE_ROLES from "@/consts/image-roles";

import type { UseFormReturn } from "react-hook-form";
import type { ProductForm } from "@/app/admin/products/components/form/ProductForm";

interface Props {
    form: UseFormReturn<ProductForm>
}

const LIMIT_FILE_NUMBER = 10;
const LIMIT_FILE_SIZE = 5 * 1024 * 1024;
const IMAGE_ROLE_ORDER = {
    [IMAGE_ROLES.MAIN_IMAGE]: 0,
    [IMAGE_ROLES.SUB_IMAGE]: 1,
    [IMAGE_ROLES.GALLERY_IMAGE]: 2
};

const getColorImageRoleStats = (images: ProductForm["images"], colorId?: string) => {
    const colorImages = images.filter(image => image.colorId === colorId) || [];

    return {
        hasMain: colorImages.some(i => i.role === IMAGE_ROLES.MAIN_IMAGE),
        subCount: colorImages.filter(i => i.role === IMAGE_ROLES.SUB_IMAGE).length,
        total: colorImages.length,
    };
};

const getImageRole = (hasMain: boolean, subCount: number) => {
    if (!hasMain) return IMAGE_ROLES.MAIN_IMAGE;
    if (subCount < 2) return IMAGE_ROLES.SUB_IMAGE;
    return IMAGE_ROLES.GALLERY_IMAGE;
};

const sortImagesByImageRole = (images: ProductForm["images"]) => {
    return [...images].sort((a, b) => {
        return a.colorId !== b.colorId
            ? 0
            : IMAGE_ROLE_ORDER[a.role] - IMAGE_ROLE_ORDER[b.role]
    });
}
  

export default function ProductImagesForm({ form }: Props) {
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

    const colorImagesIndexed = watchImages
        .map((image, index) => ({ image, index }))
        .filter(({ image }) => image.colorId === watchColor?.id);

    const handleChooseImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.files;
        if (!images || !watchColor) return;
        
        const stats = getColorImageRoleStats(watchImages, watchColor?.id);
        
        for(let i = 0; i < images.length; i++) {
            const image = images[i];

            if (stats.total >= LIMIT_FILE_NUMBER) {
                toast.warning({ text: "Chú ý", description: `Vui lòng chỉ chọn tối đa ${LIMIT_FILE_NUMBER} ảnh cho màu "${watchColor.name}" !` });
                break;
            }

            if (images[i].size > LIMIT_FILE_SIZE) {
                toast.warning({ text: "Chú ý", description: "Vui lòng chỉ chọn ảnh có kích cỡ tối đa 5MB !" });
                continue;
            }

            const role = getImageRole(stats.hasMain, stats.subCount);
            const previewUrl = URL.createObjectURL(image);
            const newImage = { 
                colorId: watchColor.id, 
                role, 
                image,
                preview: previewUrl
            };

            fieldImages.append(newImage);

            stats.total++;
            if (role === IMAGE_ROLES.MAIN_IMAGE) stats.hasMain = true;
            if (role === IMAGE_ROLES.SUB_IMAGE) stats.subCount++;
        }

        e.target.value = "";
    };

    const handleSelectImageRole = (index: number, role: ProductImageRole) => {
        const images = [...watchImages];
        const image = images[index];
        const stats = getColorImageRoleStats(watchImages, watchColor?.id);

        if (role === IMAGE_ROLES.MAIN_IMAGE && stats.hasMain) return;
        if (role === IMAGE_ROLES.SUB_IMAGE && stats.subCount >= 2) return;
        if (image.role === role) return;

        images[index] = { ...image, role };
        form.setValue("images", sortImagesByImageRole(images), { shouldDirty: true });
    }

    const handleSelectDeleteImage = (index: number) => {
        const images = [...watchImages];

        images.splice(index, 1);
        form.setValue("images", sortImagesByImageRole(images), { shouldDirty: true });
    }

    return (
        <div className="space-y-[40px] p-[20px] w-[35%] rounded-[10px] border border-zinc-200">
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
                            <FormField
                                control={form.control}
                                name="images"
                                render={() => {
                                    return (
                                        <FormItem>
                                            <FormLabel isRequired={true}>Màu sắc</FormLabel>

                                            <div className="flex flex-wrap gap-[15px]">
                                                {
                                                    watchColors.map((color, index) => {
                                                        const isExist = watchColor?.id === color.id;

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

                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <div className="grid grid-cols-2 gap-[10px] transition-all">
                                {
                                    colorImagesIndexed.map(({ image, index }) => {
                                        const src = image.preview || image.url || "";
                                        const isMain = image.role === IMAGE_ROLES.MAIN_IMAGE;
                                        const isSub = image.role === IMAGE_ROLES.SUB_IMAGE;

                                        return (
                                            <div
                                                key={index}
                                                className="group relative rounded-[10px] overflow-hidden cursor-pointer"
                                            >
                                                <Image
                                                    src={src}
                                                    alt="Ảnh sản phẩm"
                                                    width={800}
                                                    height={800}
                                                    className="w-full aspect-square object-cover object-center"
                                                />

                                                <div
                                                    className={cn(
                                                        "absolute top-[10px] left-[10px] right-[10px] flex items-center",
                                                        (!isMain && !isSub) ? "justify-end" : "justify-between"
                                                    )}
                                                >
                                                    {
                                                        (isMain || isSub) &&
                                                        (
                                                            <Badge
                                                                variant="solid"
                                                                className={isSub ? "bg-zinc-800" : ""}
                                                            >
                                                                <p>{ isSub ? "Ảnh phụ" : "Ảnh chính" }</p>
                                                            </Badge>
                                                        )
                                                    }

                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            data-slot="dropdown-menu-content"
                                                            className="opacity-0 invisible group-hover:opacity-100 group-hover:visible data-[state=open]:opacity-100 data-[state=open]:visible flex items-center justify-center size-[35px] rounded-full bg-zinc-800 text-white transition-all cursor-pointer"
                                                        >
                                                            <IoMdMore size={20} />
                                                        </DropdownMenuTrigger>

                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem onSelect={() => handleSelectImageRole(index, IMAGE_ROLES.MAIN_IMAGE)}>Ảnh chính</DropdownMenuItem>
                                                            <DropdownMenuItem onSelect={() => handleSelectImageRole(index, IMAGE_ROLES.SUB_IMAGE)}>Ảnh phụ</DropdownMenuItem>
                                                            <DropdownMenuItem onSelect={() => handleSelectImageRole(index, IMAGE_ROLES.GALLERY_IMAGE)}>Ảnh thường</DropdownMenuItem>
                                                            <DropdownMenuItem onSelect={() => handleSelectDeleteImage(index)}>Xóa ảnh</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

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
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
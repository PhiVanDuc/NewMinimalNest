"use client"

import { useFieldArray, useForm } from "react-hook-form";

import Image from "next/image";
import Header from "@/components/Header";
import Quantity from "@/components/Quantity";
import ProductSummary from "@/components/ProductSummary";
import ReturnRequestSummary from "./ReturnRequestSummary";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IoMdImages } from "react-icons/io";
import { PiTrashSimpleBold } from "react-icons/pi";

import { v7 } from "uuid";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import returnRequestSchema from "@/schema/return-request-schema";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

interface ReturnProductType {
    id: string,
    evidenceImages: (File | string)[],
    returnQuantity: string,
    returnReason: string
}

interface FormDataType {
    returnProducts: ReturnProductType[]
}

export default function Page() {
    const form = useForm<FormDataType>({
        resolver: zodResolver(returnRequestSchema),
        defaultValues: {
            returnProducts: []
        }
    })

    const field = useFieldArray({
        control: form.control,
        name: "returnProducts",
        keyName: "_id"
    })

    const handleChooseReturnProduct = () => {
        field.append({
            id: v7(),
            evidenceImages: [],
            returnQuantity: "1",
            returnReason: ""
        });
    }

    const handleChooseImages = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const images = e.target.files;
        if (!images) return;

        const current = form.getValues(`returnProducts.${index}.evidenceImages`);
        const updated = [...current, ...Array.from(images)];

        form.setValue(`returnProducts.${index}.evidenceImages`, updated);
    };

    const handleDeleteImage = (productIndex: number, indexEvidenceImage: number) => {
        const images = form.getValues(`returnProducts.${productIndex}.evidenceImages`);
        const updated = images.filter((_, i) => i !== indexEvidenceImage);
        form.setValue(`returnProducts.${productIndex}.evidenceImages`, updated);
    };

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const positiveReturnQuantityString = toPositiveIntegerString(e.target.value);
        if (!positiveReturnQuantityString) form.setValue(`returnProducts.${index}.returnQuantity`, "");

        const positiveReturnQuantity = Number(positiveReturnQuantityString);
        if (positiveReturnQuantity > 99) form.setValue(`returnProducts.${index}.returnQuantity`, "99");
        else form.setValue(`returnProducts.${index}.returnQuantity`, positiveReturnQuantityString);
    }

    const handleBlurQuantity = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
        if (e.target.value === "") form.setValue(`returnProducts.${index}.returnQuantity`, "1");
    }

    const handleClickAdjustment = (direction: "decrease" | "increase", returnQuantity: string, index: number) => {
        let positiveReturnQuantity = Number(returnQuantity);

        if (direction === "decrease" && positiveReturnQuantity > 1) positiveReturnQuantity -= 1;
        else if (direction === "increase" && positiveReturnQuantity < 99) positiveReturnQuantity += 1;

        form.setValue(`returnProducts.${index}.returnQuantity`, positiveReturnQuantity.toString());
    }

    const handleDeleteReturnProduct = (index: number) => {
        field.remove(index)
    }

    const handleSubmit = () => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Tạo đơn hoàn trả</h1>
                <p className="desc-basic">Chọn các sản phẩm trong đơn hàng mà bạn muốn hoàn trả.</p>
            </Header>

            <div className="space-y-[40px]">
                <ul className="p-[15px] rounded-[10px] space-y-[10px] border border-zinc-300">
                    {
                        Array.from({ length: 2 }).map((_, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => { handleChooseReturnProduct() }}
                                >
                                    <ProductSummary />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <Header isBreadcrumb={false}>
                <h2 className="sub-header-basic">Lý do hoàn trả</h2>
                <p className="desc-basic">Kiểm tra lại thông tin, cung cấp ảnh, số lượng và lý do hoàn trả.</p>
            </Header>

            {
                field.fields.length === 0 ?
                    (
                        <div className="p-[15px] bg-zinc-100 rounded-[10px] space-y-[2px]">
                            <p
                                className={cn(
                                    "text-[14px] font-medium truncate-1",
                                    "sm:text-[15px]"
                                )}
                            >
                                Danh sách hoàn trả trống
                            </p>

                            <p className="desc-basic">Hãy chọn sản phẩm bạn muốn hoàn trả để tiếp tục.</p>
                        </div>
                    ) :
                    (
                        <Form {...form}>
                            <form
                                autoComplete="off"
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className={cn(
                                    "flex flex-col items-start gap-[40px]",
                                    "xl:flex-row xl:gap-[20px]"
                                )}
                            >
                                <div className="space-y-[40px] w-full">
                                    {
                                        field.fields.map((field, index) => {
                                            return (
                                                <div
                                                    key={field._id}
                                                    className="space-y-[10px]"
                                                >
                                                    <ProductSummary />

                                                    <div className="p-[15px] space-y-[20px] rounded-[10px] border border-zinc-300">
                                                        <FormField
                                                            control={form.control}
                                                            name={`returnProducts.${index}.evidenceImages`}
                                                            render={() => {
                                                                return (
                                                                    <FormItem>
                                                                        <FormLabel>Ảnh bằng chứng</FormLabel>

                                                                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[10px]">
                                                                            {
                                                                                form.watch(`returnProducts.${index}.evidenceImages`).map((img, indexEvidenceImage) => {
                                                                                    const src = typeof img === "string" ? img : URL.createObjectURL(img);

                                                                                    return (
                                                                                        <div
                                                                                            key={indexEvidenceImage}
                                                                                            className="group relative cursor-pointer"
                                                                                        >
                                                                                            <Image
                                                                                                src={src}
                                                                                                alt={`Evidence Image ${indexEvidenceImage}`}
                                                                                                width={800}
                                                                                                height={800}
                                                                                                className="w-full aspect-square object-cover object-center rounded-[10px]"
                                                                                            />

                                                                                            <Button
                                                                                                type="button"
                                                                                                onClick={() => handleDeleteImage(index, indexEvidenceImage)}
                                                                                                className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-[5px] right-[5px] transition-all"
                                                                                            >
                                                                                                <PiTrashSimpleBold />
                                                                                            </Button>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }

                                                                            <label
                                                                                className="group flex flex-col items-center justify-center w-full aspect-square rounded-[10px] bg-transparent hover:bg-zinc-100 border border-zinc-300 transition-colors cursor-pointer"
                                                                            >
                                                                                <input
                                                                                    type="file"
                                                                                    multiple
                                                                                    accept="image/*"
                                                                                    hidden
                                                                                    onChange={(e) => { handleChooseImages(e, index) }}
                                                                                />

                                                                                <div className="flex items-center justify-center rounded-full size-[45px] bg-zinc-100 group-hover:bg-white text-zinc-600">
                                                                                    <IoMdImages size={25} />
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />

                                                        <FormField
                                                            control={form.control}
                                                            name={`returnProducts.${index}.returnQuantity`}
                                                            render={() => {
                                                                const returnQuantity = form.watch(`returnProducts.${index}.returnQuantity`);

                                                                return (
                                                                    <FormItem>
                                                                        <FormLabel>Số lượng</FormLabel>

                                                                        <Quantity
                                                                            value={returnQuantity}
                                                                            handleBlurQuantity={(e) => handleBlurQuantity(e, index)}
                                                                            handleChangeQuantity={(e) => handleChangeQuantity(e, index)}
                                                                            handleClickDecrease={() => handleClickAdjustment("decrease", returnQuantity, index)}
                                                                            handleClickIncrease={() => handleClickAdjustment("increase", returnQuantity, index)}
                                                                        />
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />

                                                        <FormField
                                                            control={form.control}
                                                            name={`returnProducts.${index}.returnReason`}
                                                            render={({ field }) => {
                                                                return (
                                                                    <FormItem>
                                                                        <FormLabel>Lý do</FormLabel>

                                                                        <FormControl>
                                                                            <Textarea
                                                                                placeholder="Nhập lý do hoàn trả sản phẩm . . ."
                                                                                {...field}
                                                                            />
                                                                        </FormControl>

                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />

                                                        <Button
                                                            type="button"
                                                            onClick={() => { handleDeleteReturnProduct(index) }}
                                                        >
                                                            <PiTrashSimpleBold />
                                                            Xoá yêu cầu
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <ReturnRequestSummary />
                            </form>
                        </Form>
                    )
            }
        </div>
    )
}
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
import positiveIntegerValidator from "@/utils/positive-integer-validator";

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

    const fieldArray = useFieldArray({
        control: form.control,
        name: "returnProducts",
        keyName: "_id"
    })

    const handleChooseReturnProduct = () => {
        fieldArray.append({
            id: v7(),
            evidenceImages: [],
            returnQuantity: "1",
            returnReason: ""
        });
    }

    const handleChooseImages = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const imgs = event.target.files;
        if (!imgs) return;

        const current = form.getValues(`returnProducts.${index}.evidenceImages`);
        const updated = [...current, ...Array.from(imgs)];

        form.setValue(`returnProducts.${index}.evidenceImages`, updated);
    };

    const handleDeleteImage = (productIndex: number, indexeEvidenceImage: number) => {
        const images = form.getValues(`returnProducts.${productIndex}.evidenceImages`);
        const updated = images.filter((_, i) => i !== indexeEvidenceImage);
        form.setValue(`returnProducts.${productIndex}.evidenceImages`, updated);
    };

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const target = e.target;
        let value = target.value;

        if (value) {
            const isValid = positiveIntegerValidator(value);

            if (!isValid) value = "1";
            else if (Number(value) > 2) value = "2";
        }

        form.setValue(`returnProducts.${index}.returnQuantity`, value);
    }

    const handleBlurQuantity = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
        if (e.target.value === "") form.setValue(`returnProducts.${index}.returnQuantity`, "1");
    }

    const handleDecrease = (returnQuantity: string, index: number) => {
        const num = Number(returnQuantity) - 1;
        form.setValue(`returnProducts.${index}.returnQuantity`, num < 1 ? "1" : String(num));
    }

    const handleIncrease = (returnQuantity: string, index: number) => {
        const num = Number(returnQuantity) + 1;
        form.setValue(`returnProducts.${index}.returnQuantity`, num > 2 ? "2" : String(num));
    }

    const handleDeleteReturnProduct = (index: number) => {
        fieldArray.remove(index)
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
                fieldArray.fields.length === 0 ?
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
                                // className="space-y-[20px]"
                                className={cn(
                                    "flex flex-col items-start gap-[40px]",
                                    "xl:flex-row xl:gap-[20px]"
                                )}
                            >
                                <div className="space-y-[40px] w-full">
                                    {
                                        fieldArray.fields.map((field, index) => {
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
                                                                                form.watch(`returnProducts.${index}.evidenceImages`).map((img, indexeEvidenceImage) => {
                                                                                    const src = typeof img === "string" ? img : URL.createObjectURL(img);

                                                                                    return (
                                                                                        <div
                                                                                            key={indexeEvidenceImage}
                                                                                            className="group relative cursor-pointer"
                                                                                        >
                                                                                            <Image
                                                                                                src={src}
                                                                                                alt={`evidence-${indexeEvidenceImage}`}
                                                                                                width={800}
                                                                                                height={800}
                                                                                                className="w-full aspect-square object-cover object-center rounded-[10px]"
                                                                                            />

                                                                                            <Button
                                                                                                type="button"
                                                                                                onClick={() => handleDeleteImage(index, indexeEvidenceImage)}
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
                                                                                <div className="flex items-center justify-center rounded-full size-[50px] bg-zinc-100 group-hover:bg-white text-zinc-600">
                                                                                    <IoMdImages size={30} />
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
                                                                            handleDecrease={() => handleDecrease(returnQuantity, index)}
                                                                            handleChangeQuantity={(e) => handleChangeQuantity(e, index)}
                                                                            handleBlurQuantity={(e) => handleBlurQuantity(e, index)}
                                                                            handleIncrease={() => handleIncrease(returnQuantity, index)}
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
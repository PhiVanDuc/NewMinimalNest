"use client"

import { useForm, useFieldArray } from "react-hook-form";

import Header from "@/components/Header";
import Quantity from "@/components/Quantity";
import ProductSummary from "@/components/ProductSummary";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { v7 } from "uuid";
import { cn } from "@/libs/utils";

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
        defaultValues: {
            returnProducts: [
                {
                    id: v7(),
                    evidenceImages: [],
                    returnQuantity: "1",
                    returnReason: ""
                },
                {
                    id: v7(),
                    evidenceImages: [],
                    returnQuantity: "1",
                    returnReason: ""
                }
            ]
        }
    });

    const fieldArray = useFieldArray({
        control: form.control,
        name: "returnProducts",
        keyName: "_id"
    });

    return (
        <div className="space-y-[40px] w-full">
            <Header>
                <h1 className="header-basic">Đơn hoàn trả</h1>
                <p className="desc-basic">Chọn các sản phẩm trong đơn hàng mà bạn muốn hoàn trả.</p>
            </Header>

            <div className="space-y-[40px]">
                <ul className="p-[15px] rounded-[10px] space-y-[10px] border border-zinc-300">
                    {
                        Array.from({ length: 2 }).map((_, index) => {
                            return (
                                <li key={index}>
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
                                className="space-y-[20px]"
                            >
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

                                                                    <div className={cn(
                                                                        form.watch(`returnProducts.${index}.evidenceImages`).length > 0 &&
                                                                        "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[10px]"
                                                                    )}>
                                                                        {
                                                                            form.watch(`returnProducts.${index}.evidenceImages`).length === 0 ?
                                                                                (
                                                                                    <p className="desc-basic w-full">Không cung cấp ảnh bằng chứng.</p>
                                                                                ) :
                                                                                form.watch(`returnProducts.${index}.evidenceImages`).map((img, indexeEvidenceImage) => {
                                                                                    return (
                                                                                        <div
                                                                                            key={indexeEvidenceImage}
                                                                                            className="w-full aspect-square rounded-[10px] bg-zinc-300 cursor-pointer"
                                                                                        />
                                                                                    )
                                                                                })

                                                                        }
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
                                                                        disabled={true}
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
                                                                            disabled={true}
                                                                        />
                                                                    </FormControl>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </form>
                        </Form>
                    )
            }
        </div>
    )
}
"use client"

import { useFieldArray, useForm } from "react-hook-form";

import Header from "@/components/Header";
import BasicProduct from "@/components/BasicProduct";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { FiMinus, FiPlus } from "react-icons/fi";

import { v7 } from "uuid";
import { cn } from "@/lib/utils";

interface ReturnProduct {
    id: string,
    evidenceImages: string[],
    returnQuantity: string,
    returnReason: string
}

interface FormDataType {
    returnProducts: ReturnProduct[]
}

export default function Page() {
    const form = useForm<FormDataType>({
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

    const handleDecrease = (returnQuantity: string, index: number) => {
        const num = Number(returnQuantity) - 1;
        form.setValue(`returnProducts.${index}.returnQuantity`, num < 1 ? "1" : String(num));
    }

    const handleIncrease = (returnQuantity: string, index: number) => {
        const num = Number(returnQuantity) + 1;
        form.setValue(`returnProducts.${index}.returnQuantity`, num > 2 ? "2" : String(num));
    }

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleBlurQuantity = (e: React.FocusEvent<HTMLInputElement>) => {
    }

    const handleDeleteReturnProduct = (index: number) => {
        fieldArray.remove(index)
    }

    const handleSubmit = () => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Tạo đơn hoàn trả</h1>
                <p className="desc-basic">Chọn sản phẩm bạn muốn hoàn trả và gửi yêu cầu.</p>
            </Header>

            <div className="space-y-[40px]">
                <ul className="p-[15px] rounded-[10px] space-y-[10px] border border-zinc-200">
                    {
                        Array.from({ length: 2 }).map((_, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => { handleChooseReturnProduct() }}
                                >
                                    <BasicProduct />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <Header isBreadcrumb={false}>
                <h2 className="sub-header-basic">Lý do hoàn trả</h2>
                <p className="desc-basic">Kiểm tra lại thông tin, nhập lý do và gửi yêu cầu hoàn trả.</p>
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
                                className="space-y-[20px]"
                            >
                                {
                                    fieldArray.fields.map((field, index) => {
                                        return (
                                            <div
                                                key={field._id}
                                                className="rounded-[10px] border border-zinc-200"
                                            >
                                                <div className="p-[15px] border-b border-zinc-200">
                                                    <BasicProduct />
                                                </div>

                                                <div className="p-[15px] space-y-[20px]">
                                                    <FormField
                                                        control={form.control}
                                                        name={`returnProducts.${index}.evidenceImages`}
                                                        render={() => {
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel>Ảnh bằng chứng</FormLabel>

                                                                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-[10px]">
                                                                        {
                                                                            Array.from({ length: 4 }).map((_, index) => {
                                                                                return <div key={index} className="w-full aspect-square rounded-[10px] bg-zinc-300" />
                                                                            })
                                                                        }
                                                                    </div>

                                                                    <FormMessage />
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

                                                                    <div
                                                                        className={cn(
                                                                            "flex items-center gap-[10px] w-full p-[3px] rounded-full border border-zinc-200",
                                                                            "sm:w-fit"
                                                                        )}
                                                                    >
                                                                        <button
                                                                            className="shrink-0 flex items-center justify-center w-[35px] aspect-square rounded-full text-[14px] text-zinc-700 bg-white hover:bg-zinc-100 transition-colors cursor-pointer"
                                                                            onClick={() => { handleDecrease(field.returnQuantity, index) }}
                                                                        >
                                                                            <FiMinus className="text-[16px]" />
                                                                        </button>

                                                                        <Input
                                                                            value={returnQuantity}
                                                                            onChange={handleChangeQuantity}
                                                                            onBlur={handleBlurQuantity}
                                                                            className={cn(
                                                                                "w-full h-fit p-0 text-center text-[14px] focus-visible:ring-transparent border-none shadow-none",
                                                                                "sm:w-[60px]"
                                                                            )}
                                                                        />

                                                                        <button
                                                                            className="shrink-0 flex items-center justify-center w-[35px] aspect-square rounded-full text-[14px] text-zinc-700 bg-white hover:bg-zinc-100 transition-colors cursor-pointer"
                                                                            onClick={() => { handleIncrease(field.returnQuantity, index) }}
                                                                        >
                                                                            <FiPlus className="text-[16px]" />
                                                                        </button>
                                                                    </div>

                                                                    <FormMessage />
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
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />

                                                    <div className="flex gap-[5px]">
                                                        <Button
                                                            onClick={() => { handleDeleteReturnProduct(index) }}
                                                        >
                                                            Xoá yêu cầu
                                                        </Button>
                                                    </div>
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
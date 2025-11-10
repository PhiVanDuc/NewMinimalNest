"use client"

import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form";

import Combobox from "@/components/Combobox";
import { Input } from "@/components/ui/input";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export default function ProductEditDiscount({ form }: PropsType) {
    const watchDiscountType = useWatch({
        control: form.control,
        name: "discountType"
    });

    const handleChooseDiscountType = (value: string) => {
        form.setValue("discountType", value as "percent" | "amount");
    }

    return (
        <div className="relative pl-[24px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="space-y-[20px]">
                <div className="flex items-center gap-[10px]">
                    <FormField
                        control={form.control}
                        name="discount"
                        render={() => {
                            return (
                                <FormItem className="w-full">
                                    <div className="space-y-[5px]">
                                        <FormLabel>
                                            <span>
                                                Giảm giá
                                                {watchDiscountType === "percent" ? " theo phần trăm" : " theo giá cố định"}
                                            </span>
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Nhập số tiền giảm giá"
                                                className="px-[15px] py-[20px] pr-[38px]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )
                        }}
                    />

                    <div className="space-y-[5px]">
                        <label className="block text-[14px] text-zinc-700 font-medium leading-none">Loại giảm giá</label>

                        <Combobox
                            optionList={[
                                {
                                    label: "Phần trăm",
                                    value: "percent"
                                },
                                {
                                    label: "Giá cố định",
                                    value: "amount"
                                }
                            ]}
                            value={watchDiscountType}
                            onChange={handleChooseDiscountType}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="price"
                    render={() => {
                        return (
                            <FormItem>
                                <div className="space-y-[5px]">
                                    <FormLabel>Giá bán</FormLabel>

                                    <FormControl>
                                        <Input
                                            className="px-[15px] py-[20px]"
                                            placeholder="Giá bán sản phẩm . . ."
                                            disabled={true}
                                        />
                                    </FormControl>

                                    <FormDescription>Đây sẽ là giá cuối cùng của sản phẩm, hệ thống sẽ tự tính toán và đưa ra kết quả cuối.</FormDescription>
                                </div>
                            </FormItem>
                        )
                    }}
                />
            </div>
        </div>
    )
}
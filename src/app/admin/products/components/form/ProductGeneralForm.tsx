"use client"

import { useWatch } from "react-hook-form";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { ProductFormDataType } from "@/app/admin/products/types";

interface PropsType {
    form: UseFormReturn<ProductFormDataType>
}

export default function ProductGeneralForm({ form }: PropsType) {
    const watchCostPrice = useWatch({
        control: form.control,
        name: "costPrice"
    });

    const watchInterestPercent = useWatch({
        control: form.control,
        name: "interestPercent"
    });

    const handleChangeCostPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const costPrice = toPositiveIntegerString(e.target.value);
        form.setValue("costPrice", toStandardPositiveIntegerString(costPrice), { shouldValidate: true });
    }

    const handleChangeInterestPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const interestPercent = toPositiveIntegerString(e.target.value);

        if (Number(interestPercent) > 100) form.setValue("interestPercent", "100", { shouldValidate: true });
        else form.setValue("interestPercent", interestPercent, { shouldValidate: true });
    }

    return (
        <div className="relative pl-[24px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="space-y-[20px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Tên sản phẩm</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên sản phẩm . . ."
                                        {...field}
                                        className="bg-white"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="desc"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Mô tả</FormLabel>

                                <FormControl>
                                    <Textarea
                                        placeholder="Nhập mô tả sản phẩm . . ."
                                        className="bg-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex items-start gap-[10px]">
                    <FormField
                        control={form.control}
                        name="costPrice"
                        render={() => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Giá gốc</FormLabel>

                                    <FormControl>
                                        <Input
                                            value={toStandardPositiveIntegerString(watchCostPrice)}
                                            placeholder="Nhập giá gốc sản phẩm"
                                            className="bg-white"
                                            onChange={handleChangeCostPrice}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="interestPercent"
                        render={() => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Lãi xuất %</FormLabel>

                                    <FormControl>
                                        <Input
                                            value={watchInterestPercent}
                                            placeholder="Nhập lãi xuất theo %"
                                            className="bg-white"
                                            onChange={handleChangeInterestPercent}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
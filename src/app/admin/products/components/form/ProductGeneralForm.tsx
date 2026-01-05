"use client"

import { useWatch } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { ProductForm } from "@/app/admin/products/components/form/ProductForm";

interface Props {
    form: UseFormReturn<ProductForm>
}

export default function ProductGeneralForm({ form }: Props) {
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
        const standardCostPrice = toStandardPositiveIntegerString(costPrice);
        form.setValue("costPrice", standardCostPrice, { shouldValidate: true });
    }

    const handleChangeInterestPercent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const interestPercent = toPositiveIntegerString(e.target.value);

        if (Number(interestPercent) > 100) form.setValue("interestPercent", "100", { shouldValidate: true });
        else form.setValue("interestPercent", interestPercent, { shouldValidate: true });
    }

    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel isRequired={true}>Tên sản phẩm</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Nhập tên sản phẩm . . ."
                                    {...field}
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
                            <FormLabel isRequired={true}>Mô tả</FormLabel>

                            <FormControl>
                                <Textarea
                                    placeholder="Nhập mô tả sản phẩm . . ."
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
                                <FormLabel isRequired={true}>Giá gốc</FormLabel>

                                <FormControl>
                                    <Input
                                        value={toStandardPositiveIntegerString(watchCostPrice)}
                                        placeholder="Nhập giá gốc sản phẩm"
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
                                <FormLabel isRequired={true}>Lãi xuất %</FormLabel>

                                <FormControl>
                                    <Input
                                        value={watchInterestPercent}
                                        placeholder="Nhập lãi xuất theo %"
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
    )
}
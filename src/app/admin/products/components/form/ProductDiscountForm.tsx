"use client"

import { useEffect, useMemo } from "react";
import { useWatch } from "react-hook-form";

import Combobox from "@/components/Combobox";

import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";

import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { ProductForm } from "@/app/admin/products/components/form/ProductForm";

interface Props {
    form: UseFormReturn<ProductForm>
}

export default function ProductDiscountForm({ form }: Props) {
    const watchCostPrice = useWatch({
        control: form.control,
        name: "costPrice"
    });

    const watchInterestPercent = useWatch({
        control: form.control,
        name: "interestPercent"
    });

    const watchDiscount = useWatch({
        control: form.control,
        name: "discount"
    });

    const watchDiscountType = useWatch({
        control: form.control,
        name: "discountType"
    });

    useEffect(() => {
        const handler = setTimeout(() => {
            form.setValue("discount", "");
        }, 500);

        return () => clearTimeout(handler);
    }, [watchCostPrice]);

    const price = useMemo(() => {
        const costPrice = Number(toPositiveIntegerString(watchCostPrice));
        const discount = Number(toPositiveIntegerString(watchDiscount));
        const interestPercent = Number(toPositiveIntegerString(watchInterestPercent));

        if (!costPrice) return "";
        const priceWithInterest = costPrice * (1 + interestPercent / 100);

        let finalPrice = 0;
        if (!discount) finalPrice = priceWithInterest;
        else {
            if (watchDiscountType === "percent") finalPrice = priceWithInterest - (priceWithInterest * discount) / 100;
            else finalPrice = priceWithInterest - discount;
        }

        return Math.ceil(finalPrice).toString();
    }, [watchCostPrice, watchDiscount, watchDiscountType, watchInterestPercent]);

    const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = toPositiveIntegerString(e.target.value);
        const costPrice = toPositiveIntegerString(watchCostPrice);

        if (watchDiscountType === "percent") {
            if (Number(discount) > 100) form.setValue("discount", "100");
            else form.setValue("discount", discount);
        }
        else {
            if (Number(discount) > Number(costPrice)) form.setValue("discount", toStandardPositiveIntegerString(costPrice));
            else form.setValue("discount", toStandardPositiveIntegerString(discount));
        }
    }

    const handleSelectDiscountType = (value: string) => {
        form.setValue("discount", "");
        form.setValue("discountType", value as "percent" | "amount");
    }

    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="flex items-start gap-[10px]">
                <FormField
                    control={form.control}
                    name="discount"
                    render={() => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel>
                                    <span>
                                        Giảm giá
                                        {watchDiscountType === "percent" ? " theo phần trăm" : " theo giá cố định"}
                                    </span>
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        value={watchDiscount}
                                        placeholder="Nhập số tiền giảm giá"
                                        onChange={handleChangeDiscount}
                                        disabled={watchCostPrice ? false : true}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="space-y-[8px]">
                    <label className="block text-[14px] text-zinc-700 font-medium leading-none">Loại giảm giá</label>

                    <Combobox
                        options={[
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
                        onSelect={handleSelectDiscountType}
                    />
                </div>
            </div>

            <FormField
                control={form.control}
                name="price"
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel>Giá bán</FormLabel>

                            <FormControl>
                                <Input
                                    value={!toStandardPositiveIntegerString(price) ? "0" : toStandardPositiveIntegerString(price)}
                                    placeholder="Giá bán sản phẩm . . ."
                                    disabled={true}
                                    readOnly
                                />
                            </FormControl>
                            <FormMessage />

                            <FormDescription>Đây sẽ là giá cuối cùng của sản phẩm, hệ thống sẽ tự tính toán và đưa ra kết quả cuối.</FormDescription>
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}

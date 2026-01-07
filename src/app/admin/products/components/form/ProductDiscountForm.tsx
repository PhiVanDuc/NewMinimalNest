"use client"

import { useEffect } from "react";
import { useWatch } from "react-hook-form";

import Combobox from "@/components/Combobox";

import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";

import calculatePrice from "@/utils/calculate-price";
import DISCOUNT_TYPES from "@/consts/discount-types";
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

    const watchPrice = useWatch({
        control: form.control,
        name: "price"
    });

    useEffect(() => {
        const handler = setTimeout(() => form.setValue("discount", ""), 500);
        return () => clearTimeout(handler);
    }, [watchCostPrice]);

    useEffect(() => {
        const finalPrice = calculatePrice(watchCostPrice, watchInterestPercent, watchDiscountType, watchDiscount);
        form.setValue("price", finalPrice, { shouldValidate: true });
    }, [watchCostPrice, watchInterestPercent, watchDiscount, watchDiscountType]);

    const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discountString = toPositiveIntegerString(e.target.value);
        const costPriceString = toPositiveIntegerString(watchCostPrice);
        const standardDiscountString = toStandardPositiveIntegerString(discountString);
        const standardCostPriceString = toStandardPositiveIntegerString(costPriceString);
        const discount = Number(discountString);
        const costPrice = Number(costPriceString);

        if (watchDiscountType === DISCOUNT_TYPES.PERCENT) {
            if (discount > 100) form.setValue("discount", "100");
            else form.setValue("discount", discountString);
        }
        else {
            if (discount > costPrice) form.setValue("discount", standardCostPriceString);
            else form.setValue("discount", standardDiscountString);
        }
    }

    const handleSelectDiscountType = (value: string) => {
        form.setValue("discount", "");
        form.setValue("discountType", value as DiscountType);
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
                                value: "fixed"
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
                                    value={watchPrice}
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
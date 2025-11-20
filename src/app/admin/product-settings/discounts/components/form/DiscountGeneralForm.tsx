"use client"

import { useWatch } from "react-hook-form";

import Combobox from "@/components/Combobox";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { DiscountFormDataType } from "@/app/admin/product-settings/discounts/types";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

interface PropsType {
    form: UseFormReturn<DiscountFormDataType>
}

export default function DiscountGeneralForm({ form }: PropsType) {
    const watchDiscount = useWatch({
        control: form.control,
        name: "discount"
    });

    const watchDiscountType = useWatch({
        control: form.control,
        name: "discountType"
    });

    const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = toPositiveIntegerString(e.target.value);

        if (watchDiscountType === "percent") {
            if (Number(discount) > 100) form.setValue("discount", "100");
            else form.setValue("discount", discount);
        }
        else form.setValue("discount", toStandardPositiveIntegerString(discount));
    }

    const handleChooseDiscountType = (value: string) => {
        form.setValue("discount", "");
        form.setValue("discountType", value as "percent" | "amount");
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
                            <FormLabel>Tên giảm giá</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Nhập tên giảm giá . . ."
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

            <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                <FaPlus />
                Thêm giảm giá
            </Button>
        </div>
    )
}
"use client"

import { useWatch } from "react-hook-form";

import Combobox from "@/components/Combobox";
import DatePicker from "@/components/DatePicker";

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
import type { CouponFormDataType } from "@/app/admin/coupons/types";

interface Props {
    form: UseFormReturn<CouponFormDataType>
}

export default function CouponDetailForm({ form }: Props) {
    const watchDiscount = useWatch({
        control: form.control,
        name: "discount"
    });

    const watchDiscountType = useWatch({
        control: form.control,
        name: "discountType"
    });

    const watchQuantity = useWatch({
        control: form.control,
        name: "quantity"
    });

    const watchStartDate = useWatch({
        control: form.control,
        name: "startDate"
    });

    const watchEndDate = useWatch({
        control: form.control,
        name: "endDate"
    });

    const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = toPositiveIntegerString(e.target.value);

        if (watchDiscountType === "percent") {
            if (Number(discount) > 100) form.setValue("discount", "100", { shouldValidate: true });
            else form.setValue("discount", discount, { shouldValidate: true });
        }
        else form.setValue("discount", toStandardPositiveIntegerString(discount), { shouldValidate: true });
    }

    const handleSelectDiscountType = (value: string) => {
        form.setValue("discount", "", { shouldValidate: true });
        form.setValue("discountType", value as "percent" | "amount");
    }

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("quantity", toStandardPositiveIntegerString(e.target.value), { shouldValidate: true });
    }

    const handleSelectDate = (date: undefined | Date, type: "start" | "end") => {
        if (!date) return;

        if (type === "start") {
            form.setValue("startDate", date);
            if (date.getTime() > watchEndDate.getTime()) form.setValue("endDate", date);
        }
        else form.setValue("endDate", date);
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
                                <FormLabel isRequired={true}>
                                    <span>
                                        Giảm giá
                                        {watchDiscountType === "percent" ? " theo phần trăm" : " theo giá cố định"}
                                    </span>
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        value={watchDiscount}
                                        placeholder="Nhập số tiền giảm giá . . ."
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
                        option={watchDiscountType}
                        onSelect={handleSelectDiscountType}
                    />
                </div>
            </div>

            <FormField
                control={form.control}
                name="quantity"
                render={() => {
                    return (
                        <FormItem className="w-full">
                            <FormLabel isRequired={true}>Số lượng</FormLabel>

                            <FormControl>
                                <Input
                                    value={watchQuantity}
                                    placeholder="Nhập số lượng phiếu giảm giá . . ."
                                    onChange={handleChangeQuantity}
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
                    name="startDate"
                    render={() => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Ngày bắt đầu</FormLabel>

                                <FormControl>
                                    <DatePicker
                                        value={watchStartDate}
                                        onSelect={(date) => handleSelectDate(date, "start")}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="endDate"
                    render={() => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Ngày kết thúc</FormLabel>

                                <FormControl>
                                    <DatePicker
                                        value={watchEndDate}
                                        onSelect={(date) => handleSelectDate(date, "end")}
                                        disabled={{
                                            before: watchStartDate || undefined
                                        }}
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
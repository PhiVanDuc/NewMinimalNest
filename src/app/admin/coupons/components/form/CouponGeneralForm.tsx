"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import type { UseFormReturn } from "react-hook-form";
import type { CouponFormDataType } from "@/app/admin/coupons/types";

interface PropsType {
    form: UseFormReturn<CouponFormDataType>
}

export default function CouponGeneralForm({ form }: PropsType) {
    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="flex items-start gap-[10px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-[50%]">
                                <FormLabel isRequired={true}>Tên phiếu giảm giá</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên phiếu giảm giá . . ."
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
                    name="code"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-[50%]">
                                <FormLabel isRequired={true}>Mã phiếu giảm giá</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập mã phiếu giảm giá . . ."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
            </div>

            <FormField
                control={form.control}
                name="desc"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel isRequired={true}>Mô tả</FormLabel>

                            <FormControl>
                                <Textarea
                                    placeholder="Nhập mô tả phiếu giảm giá . . ."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </div>
    )
}

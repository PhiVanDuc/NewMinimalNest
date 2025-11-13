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
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export default function ProductAddGeneral({ form }: PropsType) {
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
                                        {...field}
                                        className="bg-white"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex gap-[10px]">
                    <FormField
                        control={form.control}
                        name="costPrice"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Giá gốc</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập giá gốc sản phẩm"
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
                        name="interestPercent"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Lãi xuất %</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập lãi xuất theo %"
                                            {...field}
                                            className="bg-white"
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

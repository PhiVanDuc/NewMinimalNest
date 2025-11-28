"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import type { UseFormReturn } from "react-hook-form";

interface PropsType {
    form: UseFormReturn<{ products: number[] }>
}

export default function TemplateExcelSelectedProductForm({ form }: PropsType) {
    return (
        <FormField
            control={form.control}
            name="products"
            render={() => {
                return (
                    <FormItem className="w-[50%]">
                        <FormLabel>Sản phẩm đã chọn</FormLabel>

                        <div className="flex justify-center p-[20px] rounded-[10px] bg-zinc-100">
                            <p className="desc-basic">Chưa chọn sản phẩm nào.</p>
                        </div>

                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}

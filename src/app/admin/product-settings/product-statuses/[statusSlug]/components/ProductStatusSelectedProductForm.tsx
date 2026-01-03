"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import type { UseFormReturn } from "react-hook-form";
import type { ProductStatusFormDataType } from "@/app/admin/product-settings/product-statuses/type";

interface Props {
    form: UseFormReturn<ProductStatusFormDataType>
}

export default function ProductStatusSelectedProductForm({ form }: Props) {
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

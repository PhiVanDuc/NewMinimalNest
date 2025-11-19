"use client"

import {
    FormItem,
    FormLabel
} from "@/components/ui/form";

import type { UseFormReturn } from "react-hook-form";
import type { ProductGroupFormDataType } from "@/app/admin/product-settings/product-groups/types";

interface PropsType {
    form: UseFormReturn<ProductGroupFormDataType>
}

export default function ProductGroupSelectedProductForm({ form }: PropsType) {
    return (
        <div className="relative pl-[24px] space-y-[20px] w-full">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <FormItem>
                <FormLabel>Sản phẩm đã chọn</FormLabel>

                <div className="flex justify-center p-[20px] rounded-[10px] bg-zinc-100">
                    <p className="desc-basic">Chưa chọn sản phẩm nào.</p>
                </div>
            </FormItem>
        </div>
    )
}
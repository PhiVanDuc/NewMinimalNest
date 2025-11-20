"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiOutlineSave } from "react-icons/hi";

import type { UseFormReturn } from "react-hook-form";
import type { ProductStatusFormDataType } from "@/app/admin/product-settings/product-statuses/type";

interface PropsType {
    form: UseFormReturn<ProductStatusFormDataType>
}

export default function ProductStatusNameForm({ form }: PropsType) {
    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Tên trạng thái</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Nhập tên nhóm sản phẩm . . ."
                                    {...field}
                                    disabled={true}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />

            <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                <HiOutlineSave />
                Lưu tiến trình
            </Button>
        </div>
    )
}

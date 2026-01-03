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
import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import type { UseFormReturn } from "react-hook-form";
import type { ProductGroupFormDataType } from "@/app/admin/product-settings/product-groups/types";

interface Props {
    formType: "add" | "update",
    form: UseFormReturn<ProductGroupFormDataType>
}

export default function ProductGroupNameForm({ formType, form }: Props) {
    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>Tên nhóm sản phẩm</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Nhập tên nhóm sản phẩm . . ."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />

            {
                (formType === "add" || formType === "update") &&
                (
                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        {
                            formType === "add" ?
                                (
                                    <>
                                        <FaPlus />
                                        Thêm nhóm sản phẩm
                                    </>
                                ) :
                                (
                                    <>
                                        <IoReloadOutline />
                                        Cập nhật nhóm sản phẩm
                                    </>
                                )
                        }
                    </Button>
                )
            }
        </div>
    )
}

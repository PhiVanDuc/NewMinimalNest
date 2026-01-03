"use client"

import { useForm } from "react-hook-form";

import DialogBase from "@/components/DialogBase";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoReloadOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import inventorySchema from "@/schema/inventory-schema";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

import type { Dispatch, SetStateAction } from "react";
import type { InventoryFormDataType } from "@/app/admin/inventory/types";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function InventoryQuantityFormDialog({ isOpen, setIsOpen }: Props) {
    const form = useForm<InventoryFormDataType>({
        resolver: zodResolver(inventorySchema),
        defaultValues: {
            name: "Tên sản phẩm muốn cập nhật",
            totalQuantity: ""
        }
    });

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("totalQuantity", toPositiveIntegerString(e.target.value), { shouldValidate: true });
    }

    const handleSubmit = (data: InventoryFormDataType) => { }

    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Cập nhật tổng số lượng"
            desc="Vui lòng cập nhật tổng số lượng tồn kho cho sản phẩm thủ công tại đây."
        >
            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="px-[20px] space-y-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Tên sản phẩm</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={true}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="totalQuantity"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Tổng số lượng</FormLabel>

                                    <FormControl>
                                        <Input
                                            value={field.value}
                                            placeholder="Nhập tổng số lượng tồn kho cho sản phẩm . . ."
                                            onChange={handleChangeQuantity}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        <IoReloadOutline />
                        Cập nhật tổng số lượng
                    </Button>
                </form>
            </Form>
        </DialogBase>
    )
}
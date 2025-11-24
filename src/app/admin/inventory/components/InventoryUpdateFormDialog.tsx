"use client"

import { useForm } from "react-hook-form";

import DialogBase from "@/components/DialogBase";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoReloadOutline } from "react-icons/io5";

import type { Dispatch, SetStateAction } from "react";

interface FormDataType {
    name: string,
    quantity: string
}

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function InventoryQuantityFormDialog({ isOpen, setIsOpen }: PropsType) {
    const form = useForm<FormDataType>({
        defaultValues: {
            name: "Tên sản phẩm muốn cập nhật",
            quantity: ""
        }
    });

    const handleSubmit = (data: FormDataType) => { }

    return (
        <DialogBase
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Cập nhật tồn kho"
            desc="Vui lòng cập nhật tồn kho sản phẩm thủ công tại đây."
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
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Tồn kho</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tồn kho sản phẩm . . ."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )
                        }}
                    />

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        <IoReloadOutline />
                        Cập nhật tồn kho
                    </Button>
                </form>
            </Form>
        </DialogBase>
    )
}
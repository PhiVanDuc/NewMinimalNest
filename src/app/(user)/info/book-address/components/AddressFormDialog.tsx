"use client"

import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import addressSchema from "@/schema/address-schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    action: "add" | "edit"
}

export default function AddressFormDialog({ isOpen, setIsOpen, action }: PropsType) {
    const form = useForm({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            receiver: "",
            phoneNumber: "",
            address: ""
        }
    });

    const handleSubmit = () => { }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent
                className="flex flex-col gap-[30px] px-0 max-h-[85dvh] border-zinc-200"
            >
                <DialogHeader className="px-[20px]">
                    <DialogTitle className="text-zinc-700">
                        {action === "add" ? "Thêm địa chỉ" : "Chỉnh sửa địa chỉ"}
                    </DialogTitle>

                    <DialogDescription className="!desc-basic">
                        {
                            action === "add"
                                ? "Thêm địa chỉ nhận hàng để sử dụng trong các đơn mua sắp tới."
                                : "Chỉnh sửa thông tin địa chỉ giao hàng của bạn."
                        }
                    </DialogDescription>
                </DialogHeader>

                <div className="flex-1 px-[20px] space-y-[15px] overflow-y-auto">
                    <Form {...form}>
                        <form
                            autoComplete="off"
                            className="space-y-[20px]"
                            onSubmit={form.handleSubmit(handleSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name="receiver"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Tên người nhận</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập tên người nhận . . ."
                                                    {...field}
                                                    className="py-[22px]"
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Số điện thoại</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nhập số điện thoại . . ."
                                                    {...field}
                                                    className="py-[22px]"
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Địa chỉ</FormLabel>

                                            <FormControl>
                                                <Textarea
                                                    placeholder="Nhập địa chỉ . . ."
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                                {action === "add" ? "Thêm địa chỉ" : "Chỉnh sửa địa chỉ"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

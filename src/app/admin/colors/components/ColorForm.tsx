"use client"

import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import dynamic from "next/dynamic";
const InputColor = dynamic(
    () => import("@/components/InputColor"),
    {
        ssr: false,
        loading: () => (
            <div className="shrink-0 self-stretch w-[60px] outline-[2px] outline-offset-[2px] outline-zinc-200 rounded-[10px]" />
        )
    }
);

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import { toast } from "@pheralb/toast";
import colorSchema from "@/schema/color-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminAddColor, adminUpdateColor } from "@/services/admin-color";

import type { ColorDataType, ColorFormDataType } from "@/app/admin/colors/types";

interface PropsType {
    formType: "add" | "update",
    data?: ColorDataType
}

export default function ColorForm({ formType, data }: PropsType) {
    const params = useParams();
    const queryClient = useQueryClient();

    const id = params.colorId;
    const isAdd = formType === "add";

    const form = useForm<ColorFormDataType>({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            name: data?.name || "",
            colorCode: data?.color_code || "#000000"
        }
    });

    const mutation = useMutation({
        mutationFn: (data: ColorFormDataType) => {
            if (isAdd) return adminAddColor(data);
            return adminUpdateColor(id, data);
        },
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });

                if (isAdd) form.reset();
                else {
                    queryClient.invalidateQueries({ queryKey: ["adminColor", { id }] });
                    queryClient.invalidateQueries({ queryKey: ["adminColors"] });
                }
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.log(error);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(data => mutation.mutate(data))}
                className="space-y-[20px]"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Tên màu sắc</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên màu sắc . . ."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex items-stretch gap-[20px]">
                    <FormField
                        control={form.control}
                        name="colorCode"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <InputColor
                                        colorCode={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={form.control}
                        name="colorCode"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-full">
                                    <FormLabel>Mã màu</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Chọn hoặc nhập mã màu sắc . . ."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                </div>

                <Button
                    className="w-full bg-theme-main hover:bg-theme-main/95"
                    disabled={mutation.isPending}
                >
                    {
                        isAdd ?
                            (
                                <>
                                    <FaPlus />
                                    {mutation.isPending ? "Đang thêm màu sắc . . ." : "Thêm màu sắc"}
                                </>
                            ) :
                            (
                                <>
                                    <IoReloadOutline />
                                    {mutation.isPending ? "Đang cập nhật màu sắc . . ." : "Cập nhật màu sắc"}
                                </>
                            )
                    }
                </Button>
            </form>
        </Form>
    )
}
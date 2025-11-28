"use client"

import { useForm } from "react-hook-form";

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

import Header from "@/components/Header";

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
import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import colorSchema from "@/schema/color-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import type { ColorDataType, ColorFormDataType } from "@/app/admin/colors/types";

interface PropsType {
    formType: "add" | "update",
    data?: ColorDataType
}

export default function ColorForm({ formType, data }: PropsType) {
    const form = useForm<ColorFormDataType>({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            name: "",
            colorCode: "#000000"
        }
    });

    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("colorCode", e.target.value, { shouldValidate: true });
    }

    const handleSubmit = (data: ColorFormDataType) => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm màu sắc" :
                            formType === "update" ? "Cập nhật màu sắc" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm màu sắc tại đây." :
                            formType === "update" ? "Vui lòng cập nhật màu sắc tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
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
                                            onChange={handleChangeColor}
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

                    {
                        (formType === "add" || formType === "update") &&
                        (
                            <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                                {
                                    formType === "add" ?
                                        (
                                            <>
                                                <FaPlus />
                                                Thêm màu sắc
                                            </>
                                        ) :
                                        (
                                            <>
                                                <IoReloadOutline />
                                                Cập nhật màu sắc
                                            </>
                                        )
                                }
                            </Button>
                        )
                    }
                </form>
            </Form>
        </div >
    )
}
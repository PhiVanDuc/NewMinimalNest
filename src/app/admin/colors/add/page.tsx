"use client"

import { useForm } from "react-hook-form";

import dynamic from "next/dynamic";
const InputColor = dynamic(
    () => import("@/components/InputColor"),
    {
        ssr: false,
        loading: () => (
            <div className="self-stretch w-[60px] outline-[2px] outline-offset-[2px] outline-zinc-200 rounded-[10px]" />
        )
    }
);

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FiPlus } from "react-icons/fi";

import colorSchema from "@/schema/color-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Page() {
    const form = useForm({
        resolver: zodResolver(colorSchema),
        defaultValues: {
            name: "",
            hex: "#000000"
        }
    });

    const handleSubmit = () => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm màu sắc</h1>
                <p className="desc-basic">Vui lòng thêm màu sắc tại đây.</p>
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
                        <InputColor form={form} />

                        <FormField
                            control={form.control}
                            name="hex"
                            render={({ field }) => {
                                return (
                                    <FormItem className="w-full">
                                        <FormLabel>Mã màu hex</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Chọn hoặc nhập mã màu hex . . ."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                    </div>

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        <FiPlus />
                        Thêm màu sắc
                    </Button>
                </form>
            </Form>
        </div >
    )
}

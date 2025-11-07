"use client"

import { useForm } from "react-hook-form";

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

import { IoReloadOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import categorySchema from "@/schema/category-schema";

export default function Page() {
    const form = useForm({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: ""
        }
    });

    const handleSubmit = () => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cập nhật danh mục</h1>
                <p className="desc-basic">Vui lòng cập nhật danh mục tại đây.</p>
            </Header>

            <Form {...form} >
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Tên danh mục</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập tên danh mục . . ."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        <IoReloadOutline />
                        Cập nhật danh mục
                    </Button>
                </form>
            </Form>
        </div>
    )
}
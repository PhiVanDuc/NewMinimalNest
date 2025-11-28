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
import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import categorySchema from "@/schema/category-schema";

import type { CategoryDataType, CategoryFormDataType } from "@/app/admin/categories/types";

interface PropsType {
    formType: "add" | "update",
    data?: CategoryDataType
}

export default function CategoryForm({ formType, data }: PropsType) {
    const form = useForm<CategoryFormDataType>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: ""
        }
    });

    const handleSubmit = (data: CategoryFormDataType) => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm danh mục" :
                            formType === "update" ? "Cập nhật danh mục" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm danh mục tại đây." :
                            formType === "update" ? "Vui lòng cập nhật danh mục tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
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

                    {
                        (formType === "add" || formType === "update") &&
                        (
                            <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                                {
                                    formType === "add" ?
                                        (
                                            <>
                                                <FaPlus />
                                                Thêm danh mục
                                            </>
                                        ) :
                                        (
                                            <>
                                                <IoReloadOutline />
                                                Cập nhật danh mục
                                            </>
                                        )
                                }
                            </Button>
                        )
                    }
                </form>
            </Form>
        </div>
    )
}
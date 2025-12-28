"use client"

import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import { toast } from "@pheralb/toast";
import categorySchema from "@/schema/category-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminAddCategory, adminUpdateCategory } from "@/services/categories/admin";

import type { CategoryDataType, CategoryFormDataType } from "@/app/admin/categories/types";

interface PropsType {
    formType: "add" | "update",
    data?: CategoryDataType
}

export default function CategoryForm({ formType, data }: PropsType) {
    const params = useParams();
    const queryClient = useQueryClient();

    const id = params.categoryId;
    const isAddType = formType === "add";

    const form = useForm<CategoryFormDataType>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: data?.name || "",
        }
    });

    const mutation = useMutation({
        mutationFn: (data: CategoryFormDataType) => {
            if (isAddType) return adminAddCategory(data);
            return adminUpdateCategory(id, data);
        },
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminCategories"] });

                if (isAddType) form.reset();
                else queryClient.invalidateQueries({ queryKey: ["adminCategory", { id }] });
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(data => mutation.mutate(data))}
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

                <Button
                    className="w-full bg-theme-main hover:bg-theme-main/95"
                    disabled={mutation.isPending}
                >
                    {
                        isAddType ?
                            (
                                <>
                                    <FaPlus />
                                    {mutation.isPending ? "Đang thêm danh mục . . ." : "Thêm danh mục"}
                                </>
                            ) :
                            (
                                <>
                                    <IoReloadOutline />
                                    {mutation.isPending ? "Đang cập nhật danh mục . . ." : "Cập nhật danh mục"}
                                </>
                            )
                    }
                </Button>
            </form>
        </Form>
    )
}
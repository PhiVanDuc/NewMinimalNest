"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductGroupsAddFilter from "@/app/admin/product-settings/product-groups/add/components/ProductGroupsAddFilter";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

export interface FormValuesType {
    name: string,
    products: number[]
}

export default function Page() {
    const form = useForm<FormValuesType>({
        defaultValues: {
            name: "",
            products: []
        }
    });

    const handleSubmit = (data: FormValuesType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm nhóm sản phẩm</h1>
                <p className="desc-basic">Vui lòng thêm nhóm sản phẩm tại đây.</p>
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

                    <div className="flex items-start gap-[20px]">
                        <ProductGroupsAddFilter form={form} />

                        <div className="relative pl-[24px] space-y-[20px] w-full">
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

                            <p>Nội dung</p>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}
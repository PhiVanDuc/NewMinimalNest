"use client"

import { useRef, useState } from "react";
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
import { FaEye, FaPlus } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export interface FormValuesType {
    name: string,
    products: number[]
}

export default function Page() {
    const filterFormRef = useRef(null);
    const mainFormRef = useRef(null);

    const [isShowProductPicker, setIsShowProductPicker] = useState(true);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [filter, setFilter] = useState({
        name: "",
        categories: []
    });

    const form = useForm<FormValuesType>({
        defaultValues: {
            name: "",
            products: []
        }
    });

    const watchProducts = form.watch("products");

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
                    className="space-y-[40px]"
                >
                    <div
                        ref={filterFormRef}
                        className="relative pl-[24px] space-y-[20px]"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />
                    </div>

                    <div
                        ref={mainFormRef}
                        className="relative pl-[24px] space-y-[20px]"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

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

                        {
                            watchProducts.length === 0 ?
                                (
                                    <div className="flex justify-center p-[20px] rounded-[10px] bg-zinc-100">
                                        <p className="desc-basic">Chưa có sản phẩm nào trong nhóm.</p>
                                    </div>
                                ) :
                                (
                                    <ul></ul>
                                )
                        }
                    </div>

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                        <FaPlus />
                        Thêm nhóm sản phẩm
                    </Button>
                </form>
            </Form>

            <button
                className="fixed bottom-[20px] right-[20px] flex items-center gap-[10px] px-[20px] py-[8px] rounded-full bg-zinc-800 hover:bg-zinc-800/95 text-[14px] text-white font-medium transition cursor-pointer"
                onClick={() => { setIsShowProductPicker(!isShowProductPicker); }}
            >
                {
                    isShowProductPicker ?
                        (
                            <>
                                <FaEyeSlash className="text-[18px]" />
                                Ẩn lựa chọn sản phẩm
                            </>
                        ) :
                        (
                            <>
                                <FaEye className="text-[18px]" />
                                Hiện lựa chọn sản phẩm
                            </>
                        )
                }
            </button>
        </div>
    )
}
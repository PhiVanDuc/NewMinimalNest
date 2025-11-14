"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductAddGeneral from "@/app/admin/products/add/components/ProductAddGeneral";
import ProductAddDiscount from "@/app/admin/products/add/components/ProductAddDiscount";
import ProductAddColorList from "@/app/admin/products/add/components/ProductAddColorList";
import ProductAddImageList from "@/app/admin/products/add/components/ProductAddImageList";
import ProductAddCategoryList from "@/app/admin/products/add/components/ProductAddCategoryList";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import productSchema from "@/schema/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export interface FormValuesType {
    name: string,
    desc: string,
    costPrice: string,
    interestPercent: string,
    discountType: "percent" | "amount",
    discount: string,
    price: string,
    // categories: { name: string, slug: string }[]
    // colors: { name: string, slug: string, colorCode: string }[]
    // color: { name: string, slug: string, colorCode: string } | undefined,
    // images: {
    //     colorSlug: string;
    //     type: "main" | "sub" | "normal";
    //     image: File | string;
    // }[]
}

export default function Page() {
    const form = useForm<FormValuesType>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            desc: "",
            costPrice: "",
            interestPercent: "",
            discountType: "percent",
            discount: "",
            price: "",
            // categories: [],
            // colors: [],
            // color: undefined,
            // images: []
        }
    });

    const handleSubmit = (data: FormValuesType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Thêm sản phẩm</h1>
                <p className="desc-basic">Vui lòng thêm sản phẩm tại đây.</p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    className="flex gap-[40px]"
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <div className="space-y-[40px] w-[65%]">
                        <ProductAddGeneral form={form} />
                        <ProductAddDiscount form={form} />

                        <div className="relative pl-[24px]">
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

                            <div className="space-y-[20px]">
                                {/* <ProductAddCategoryList form={form} />
                                <ProductAddColorList form={form} /> */}
                            </div>
                        </div>

                        <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                            <FaPlus />
                            Thêm sản phẩm
                        </Button>
                    </div>

                    {/* <ProductAddImageList form={form} /> */}
                </form>
            </Form>
        </div>
    )
}

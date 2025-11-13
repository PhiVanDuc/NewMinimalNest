"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductEditGeneral from "@/app/admin/products/[productSlug]/components/ProductEditGeneral";
import ProductEditDiscount from "@/app/admin/products/[productSlug]/components/ProductEditDiscount";
import ProductEditColorList from "@/app/admin/products/[productSlug]/components/ProductEditColorList";
import ProductEditImageList from "@/app/admin/products/[productSlug]/components/ProductEditImageList";
import ProductEditCategoryList from "@/app/admin/products/[productSlug]/components/ProductEditCategoryList";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { IoReloadOutline } from "react-icons/io5";

export interface FormValuesType {
    name: string,
    desc: string,
    costPrice: string,
    interestPercent: string,
    discountType: "percent" | "amount",
    discount: string,
    price: string,
    categories: { name: string, slug: string }[]
    colors: { name: string, slug: string, colorCode: string }[]
    color: { name: string, slug: string, colorCode: string } | undefined,
    images: {
        colorSlug: string;
        type: "main" | "sub" | "normal";
        image: File | string;
    }[]
}

export default function Page() {
    const form = useForm<FormValuesType>({
        defaultValues: {
            name: "",
            desc: "",
            costPrice: "",
            interestPercent: "",
            discountType: "percent",
            discount: "",
            price: "",
            categories: [],
            colors: [],
            color: undefined,
            images: []
        }
    });

    const handleSubmit = (data: FormValuesType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cập nhật sản phẩm</h1>
                <p className="desc-basic">Vui lòng cập nhật sản phẩm tại đây.</p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    className="flex gap-[40px]"
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <div className="space-y-[40px] w-[65%]">
                        <ProductEditGeneral form={form} />
                        <ProductEditDiscount form={form} />

                        <div className="relative pl-[24px]">
                            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

                            <div className="space-y-[20px]">
                                <ProductEditCategoryList form={form} />
                                <ProductEditColorList form={form} />
                            </div>
                        </div>

                        <Button className="w-full bg-theme-main hover:bg-theme-main/95">
                            <IoReloadOutline />
                            Cập nhật sản phẩm
                        </Button>
                    </div>

                    <ProductEditImageList form={form} />
                </form>
            </Form>
        </div>
    )
}

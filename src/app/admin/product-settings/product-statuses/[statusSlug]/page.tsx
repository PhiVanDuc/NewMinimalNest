"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductStatusNameForm from "@/app/admin/product-settings/product-statuses/[statusSlug]/components/ProductStatusNameForm";
import ProductStatusFilterForm from "@/app/admin/product-settings/product-statuses/[statusSlug]/components/ProductStatusFilterForm";
import ProductStatusSelectedProductForm from "@/app/admin/product-settings/product-statuses/[statusSlug]/components/ProductStatusSelectedProductForm";

import { Form } from "@/components/ui/form";

import type { ProductStatusFormDataType } from "@/app/admin/product-settings/product-statuses/type";

export default function Page() {
    const form = useForm<ProductStatusFormDataType>({
        defaultValues: {
            name: "",
            products: []
        }
    });

    const handleSubmit = (data: ProductStatusFormDataType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Gán trạng thái sản phẩm</h1>
                <p className="desc-basic">Vui lòng chọn sản phẩm phù hợp để gán trạng thái.</p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[40px]"
                >
                    <ProductStatusNameForm form={form} />

                    <div className="flex items-start gap-[20px]">
                        <ProductStatusFilterForm form={form} />
                        <ProductStatusSelectedProductForm form={form} />
                    </div>
                </form>
            </Form>
        </div>
    )
}

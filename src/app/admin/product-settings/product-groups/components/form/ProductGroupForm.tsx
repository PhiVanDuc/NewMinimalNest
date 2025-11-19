"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductGroupNameForm from "@/app/admin/product-settings/product-groups/components/form/ProductGroupNameForm";
import ProductGroupFilterForm from "@/app/admin/product-settings/product-groups/components/form/ProductGroupFilterForm";
import ProductGroupSelectedProductForm from "@/app/admin/product-settings/product-groups/components/form/ProductGroupSelectedProductForm";

import { Form } from "@/components/ui/form";

import type { ProductGroupDataType, ProductGroupFormDataType } from "@/app/admin/product-settings/product-groups/types";

interface PropsType {
    formType: "add" | "edit",
    data?: ProductGroupDataType
}

export default function ProductGroupForm({ formType, data }: PropsType) {
    const form = useForm<ProductGroupFormDataType>({
        defaultValues: {
            name: "",
            products: []
        }
    });

    const handleSubmit = (data: ProductGroupFormDataType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm nhóm sản phẩm" :
                            formType === "edit" ? "Cập nhật nhóm sản phẩm" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm nhóm sản phẩm tại đây." :
                            formType === "edit" ? "Vui lòng cập nhật nhóm sản phẩm tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[40px]"
                >
                    <ProductGroupFilterForm form={form} />
                    <ProductGroupSelectedProductForm form={form} />
                    <ProductGroupNameForm formType={formType} form={form} />
                </form>
            </Form>
        </div>
    )
}

"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductFilterForm from "@/components/ProductFilterForm";
import ProductGroupNameForm from "@/app/admin/product-settings/product-groups/components/form/ProductGroupNameForm";
import ProductGroupSelectedProductForm from "@/app/admin/product-settings/product-groups/components/form/ProductGroupSelectedProductForm";

import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import productGroupSchema from "@/schema/product-group-schema";

import type { ProductGroupDataType, ProductGroupFormDataType } from "@/app/admin/product-settings/product-groups/types";

interface PropsType {
    formType: "add" | "update",
    data?: ProductGroupDataType
}

export default function ProductGroupForm({ formType, data }: PropsType) {
    const form = useForm<ProductGroupFormDataType>({
        resolver: zodResolver(productGroupSchema),
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
                            formType === "update" ? "Cập nhật nhóm sản phẩm" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm nhóm sản phẩm tại đây." :
                            formType === "update" ? "Vui lòng cập nhật nhóm sản phẩm tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[40px]"
                >
                    <ProductGroupNameForm
                        formType={formType}
                        form={form}
                    />

                    <div className="flex items-start gap-[20px]">
                        <ProductFilterForm />
                        <ProductGroupSelectedProductForm form={form} />
                    </div>
                </form>
            </Form>
        </div>
    )
}

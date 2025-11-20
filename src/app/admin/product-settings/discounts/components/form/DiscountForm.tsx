"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import DiscountGeneralForm from "@/app/admin/product-settings/discounts/components/form/DiscountGeneralForm";
import DiscountFilterForm from "@/app/admin/product-settings/discounts/components/form/DiscountFilterForm";
import DiscountSelectedProductForm from "@/app/admin/product-settings/discounts/components/form/DiscountSelectedProductForm";

import { Form } from "@/components/ui/form";

import type { DiscountDataType, DiscountFormDataType } from "@/app/admin/product-settings/discounts/types";

interface PropsType {
    formType: "add" | "edit",
    data?: DiscountDataType
}

export default function DiscountForm({ formType, data }: PropsType) {
    const form = useForm<DiscountFormDataType>({
        defaultValues: {
            name: "",
            discountType: "percent",
            discount: "",
            products: []
        }
    });

    const handleSubmit = (data: DiscountFormDataType) => {
        console.log(data);
    }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm giảm giá" :
                            formType === "edit" ? "Cập nhật giảm giá" : "Sai loại biểu mẫu"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm giảm giá tại đây." :
                            formType === "edit" ? "Vui lòng cập nhật giảm giá tại đây." : "Vui lòng cung cấp đúng loại biểu mẫu."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    className="space-y-[40px]"
                    onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <DiscountGeneralForm form={form} />

                    <div className="flex items-start gap-[20px]">
                        <DiscountFilterForm />
                        <DiscountSelectedProductForm form={form} />
                    </div>
                </form>
            </Form>
        </div>
    )
}
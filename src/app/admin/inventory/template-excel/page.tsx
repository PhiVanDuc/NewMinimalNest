"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import ProductFilterForm from "@/components/ProductFilterForm";
import TemplateExcelSelectedProductForm from "@/app/admin/inventory/template-excel/TemplateExcelSelectedProductForm";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FaRegFileExcel } from "react-icons/fa6";

import type { TemplateExcelFormDataType } from "@/app/admin/inventory/types";

export default function Page() {
    const form = useForm<TemplateExcelFormDataType>({
        defaultValues: {
            products: []
        }
    });

    const handleSubmit = () => { }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-[40px]"
            >
                <div className="flex items-center justify-between">
                    <Header>
                        <h1 className="header-basic">Mẫu Excel</h1>
                        <p className="desc-basic">Vui lòng xuất mẫu excel tại đây.</p>
                    </Header>

                    <Button className="bg-theme-main hover:bg-theme-main/95">
                        <FaRegFileExcel />
                        Xuất mẫu Excel
                    </Button>
                </div>

                <div className="space-y-[10px]">
                    <p className="desc-basic">Có thể chọn trước các sản phẩm sẽ xuất hiện trong Excel.</p>

                    <div className="flex items-start gap-[20px]">
                        <ProductFilterForm />
                        <TemplateExcelSelectedProductForm form={form} />
                    </div>
                </div>
            </form>
        </Form>
    )
}
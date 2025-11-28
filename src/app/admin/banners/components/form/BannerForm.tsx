"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import BannerDateForm from "@/app/admin/banners/components/form/BannerDateForm";
import BannerGeneralForm from "@/app/admin/banners/components/form/BannerGeneralForm";

import { Form } from "@/components/ui/form";

import type { BannerFormDataType } from "@/app/admin/banners/types";

interface PropsType {
    formType: "add" | "update",
    data?: number[]
}

export default function BannerForm({ formType, data }: PropsType) {
    const form = useForm<BannerFormDataType>({
        defaultValues: {
            type: "san-pham",
            name: "",
            colorCode: "#12778A",
            startDate: new Date(),
            endDate: new Date()
        }
    });

    const handleSubmit = (data: BannerFormDataType) => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm Banner" :
                            formType === "update" && "Cập nhật Banner"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm Banner tại đây." :
                            formType === "update" && "Vui lòng cập nhật Banner tại đây."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[40px]"
                >
                    <BannerGeneralForm form={form} />
                    <BannerDateForm
                        formType={formType}
                        form={form}
                    />
                </form>
            </Form>
        </div>
    )
}
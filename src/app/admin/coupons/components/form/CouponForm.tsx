"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import CouponDetailForm from "@/app/admin/coupons/components/form/CouponDetailForm";
import CouponGeneralForm from "@/app/admin/coupons/components/form/CouponGeneralForm";
import CouponConditionForm from "@/app/admin/coupons/components/form/CouponConditionForm";

import { Form } from "@/components/ui/form";

import couponSchema from "@/schema/coupon-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import type { CouponDataType, CouponFormDataType } from "@/app/admin/coupons/types";

interface Props {
    formType: "add" | "update",
    data?: CouponDataType
}

export default function CouponForm({ formType, data }: Props) {
    const form = useForm<CouponFormDataType>({
        resolver: zodResolver(couponSchema),
        defaultValues: {
            name: "",
            code: "",
            desc: "",
            discountType: "percent",
            discount: "",
            startDate: new Date(),
            endDate: new Date(),
            quantity: "",
            minTotal: "",
            rank: "tat-ca"
        }
    });

    const handleSubmit = (data: CouponFormDataType) => { }

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">
                    {
                        formType === "add" ? "Thêm phiếu giảm giá" :
                            formType === "update" && "Cập nhật phiếu giảm giá"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        formType === "add" ? "Vui lòng thêm phiếu giảm giá tại đây." :
                            formType === "update" && "Vui lòng cập nhật phiếu giảm giá tại đây."
                    }
                </p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[40px]"
                >
                    <CouponGeneralForm form={form} />
                    <CouponDetailForm form={form} />
                    <CouponConditionForm
                        formType={formType}
                        form={form}
                    />
                </form>
            </Form>
        </div>
    )
}
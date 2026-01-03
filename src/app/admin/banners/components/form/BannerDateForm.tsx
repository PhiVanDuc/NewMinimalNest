"use client"

import { useWatch } from "react-hook-form";

import DatePicker from "@/components/DatePicker";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import type { UseFormReturn } from "react-hook-form";
import type { BannerFormDataType } from "@/app/admin/banners/types";

interface Props {
    formType: "add" | "update",
    form: UseFormReturn<BannerFormDataType>
}

export default function BannerDateForm({ formType, form }: Props) {
    const watchStartDate = useWatch({
        control: form.control,
        name: "startDate"
    });

    const watchEndDate = useWatch({
        control: form.control,
        name: "endDate"
    });

    const handleSelectDate = (date: undefined | Date, type: "start" | "end") => {
        if (!date) return;

        if (type === "start") {
            form.setValue("startDate", date);
            if (date.getTime() > watchEndDate.getTime()) form.setValue("endDate", date);
        }
        else form.setValue("endDate", date);
    }

    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute top-0 bottom-0 left-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="flex items-start gap-[10px]">
                <FormField
                    control={form.control}
                    name="startDate"
                    render={() => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Ngày bắt đầu</FormLabel>

                                <FormControl>
                                    <DatePicker
                                        value={watchStartDate}
                                        onSelect={(date) => handleSelectDate(date, "start")}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="endDate"
                    render={() => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Ngày kết thúc</FormLabel>

                                <FormControl>
                                    <DatePicker
                                        value={watchEndDate}
                                        onSelect={(date) => handleSelectDate(date, "end")}
                                        disabled={{
                                            before: watchStartDate || undefined
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
            </div>

            {
                (formType === "add" || formType === "update") && (
                    <Button
                        className="w-full bg-theme-main hover:bg-theme-main/95"
                    >
                        {
                            formType === "add" ?
                                (
                                    <>
                                        <FaPlus />
                                        Thêm Banner
                                    </>
                                ) :
                                (
                                    <>
                                        <IoReloadOutline />
                                        Cập nhật Banner
                                    </>
                                )
                        }
                    </Button>
                )
            }
        </div>
    )
}
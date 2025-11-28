"use client"

import { useWatch } from "react-hook-form";

import dynamic from "next/dynamic";
const InputColor = dynamic(
    () => import("@/components/InputColor"),
    {
        ssr: false,
        loading: () => (
            <div className="shrink-0 self-stretch w-[60px] outline-[2px] outline-offset-[2px] outline-zinc-200 rounded-[10px]" />
        )
    }
);

import Combobox from "@/components/Combobox";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import bannerTypes from "@/consts/banner-types";

import type { UseFormReturn } from "react-hook-form";
import type { BannerFormDataType } from "@/app/admin/banners/types";

interface PropsType {
    form: UseFormReturn<BannerFormDataType>
}

export default function BannerGeneralForm({ form }: PropsType) {
    const watchType = useWatch({
        control: form.control,
        name: "type"
    });

    const handleSelectType = (option: string) => {
        form.setValue("type", option);
    }

    const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("colorCode", e.target.value, { shouldValidate: true });
    }

    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute top-0 bottom-0 left-0 w-[4px] h-full rounded-full bg-theme-main" />

            <div className="flex items-start gap-[10px]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Tên Banner</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên Banner . . ."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormItem>
                    <FormLabel>Loại Banner</FormLabel>

                    <Combobox
                        options={bannerTypes}
                        option={bannerTypes.find(type => type.value === watchType)?.value}
                        onSelect={handleSelectType}
                    />
                </FormItem>
            </div>

            <div className="flex items-stretch gap-[20px]">
                <FormField
                    control={form.control}
                    name="colorCode"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <InputColor
                                    colorCode={field.value}
                                    onChange={handleChangeColor}
                                />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="colorCode"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormLabel isRequired={true}>Mã màu Banner</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Chọn hoặc nhập mã màu sắc cho Banner . . ."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
            </div>
        </div>
    )
}
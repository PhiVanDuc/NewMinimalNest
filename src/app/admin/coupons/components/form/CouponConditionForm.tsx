"use client"

import { useWatch } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";
import { IoReloadOutline } from "react-icons/io5";

import ranksConst from "@/consts/ranks";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import type { UseFormReturn } from "react-hook-form";
import type { CouponFormDataType } from "@/app/admin/coupons/types";

interface Props {
    formType: "add" | "update"
    form: UseFormReturn<CouponFormDataType>
}

export default function CouponConditionForm({ formType, form }: Props) {
    const watchMinTotal = useWatch({
        control: form.control,
        name: "minTotal"
    });

    const watchRank = useWatch({
        control: form.control,
        name: "rank"
    });

    const handleChangeMinTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("minTotal", toStandardPositiveIntegerString(toPositiveIntegerString(e.target.value)));
    }

    return (
        <div className="relative pl-[24px] space-y-[20px]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

            <FormField
                control={form.control}
                name="minTotal"
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel>Giá trị đơn hàng tối thiểu</FormLabel>

                            <FormControl>
                                <Input
                                    value={watchMinTotal}
                                    placeholder="Vui lòng nhập giá trị đơn hàng tối thiểu . . ."
                                    onChange={handleChangeMinTotal}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />

            <FormField
                control={form.control}
                name="rank"
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel>Cấp bậc khách hàng</FormLabel>

                            <FormControl>
                                <RadioGroup
                                    value={watchRank}
                                    onValueChange={(value) => form.setValue("rank", value)}
                                    className="flex items-center gap-[25px]"
                                >
                                    <FormItem
                                        key="tat-ca"
                                        className="flex items-center gap-[10px]"
                                    >
                                        <FormControl>
                                            <RadioGroupItem
                                                key="tat-ca"
                                                value="tat-ca"
                                            />
                                        </FormControl>

                                        <FormLabel>Tất cả</FormLabel>
                                    </FormItem>

                                    {
                                        Object.values(ranksConst).map((rank) => (
                                            <FormItem
                                                key={rank.value}
                                                className="flex items-center gap-[10px]"
                                            >
                                                <FormControl>
                                                    <RadioGroupItem
                                                        key={rank.value}
                                                        value={rank.value}
                                                    />
                                                </FormControl>

                                                <FormLabel>{rank.label}</FormLabel>
                                            </FormItem>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    );
                }}
            />


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
                                        Thêm phiếu giảm giá
                                    </>
                                ) :
                                (
                                    <>
                                        <IoReloadOutline />
                                        Cập nhật phiếu giảm giá
                                    </>
                                )
                        }
                    </Button>
                )
            }
        </div>
    )
}
"use client"

import Image from "next/image";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FaShippingFast } from "react-icons/fa";

interface PropsType {
    isEdit?: boolean
}

export default function PaymentMethod({ isEdit = true }: PropsType) {
    return (
        <div className="space-y-[20px]">
            <h2 className="sub-header-basic">Phương thức thanh toán</h2>

            <RadioGroup
                className="rounded-[10px] border border-zinc-300"
                disabled={isEdit ? false : true}
            >
                <label className="border-b border-zinc-300 flex items-center gap-[20px] p-[20px] cursor-pointer">
                    <RadioGroupItem value="cod" />

                    <div className="flex items-center gap-[10px]">
                        <div className="w-[26px]">
                            <FaShippingFast size={26} className="text-theme-main" />
                        </div>

                        <p className="text-[14px] font-medium">Thanh toán khi nhận hàng (COD)</p>
                    </div>
                </label>

                <label className="flex items-center gap-[20px] p-[20px] cursor-pointer">
                    <RadioGroupItem value="stripe" />

                    <div className="flex items-center gap-[10px]">
                        <div className="flex justify-center w-[26px]">
                            <Image
                                src="/images/momo-logo.png"
                                alt="MoMo Logo"
                                priority={true}
                                width={50}
                                height={50}
                                className="w-[26px] aspect-square object-cover object-center"
                            />
                        </div>

                        <p className="text-[14px] font-medium">Thanh toán qua MoMo</p>
                    </div>
                </label>
            </RadioGroup>
        </div>
    )
}

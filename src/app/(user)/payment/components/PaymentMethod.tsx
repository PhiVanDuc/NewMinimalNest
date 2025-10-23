"use client"

import Image from "next/image";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaShippingFast } from "react-icons/fa";

export default function PaymentMethod() {
    return (
        <div className="space-y-[20px]">
            <h2 className="text-[16px] md:text-[18px] font-semibold">Phương thức thanh toán</h2>

            <RadioGroup
                className="rounded-[10px] border border-zinc-200"
            >
                <label className="border-b border-zinc-200 flex items-center gap-[20px] p-[20px] cursor-pointer">
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

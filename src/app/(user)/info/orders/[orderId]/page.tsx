"use client"

import PaymentAddress from "@/app/(user)/payment/components/PaymentAddress";
import PaymentTable from "@/app/(user)/payment/components/PaymentTable";
import PaymentCoupon from "@/app/(user)/payment/components/PaymentCoupon";
import PaymentMessage from "@/app/(user)/payment/components/PaymentMessage";
import PaymentMethod from "@/app/(user)/payment/components/PaymentMethod";
import PaymentSummary from "@/app/(user)/payment/components/PaymentSummary";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <section
            className={cn(
                "w-full space-y-[20px]",
                "sm:space-y-[40px]"
            )}
        >
            <header className="flex items-center gap-[15px]">
                <p
                    className={cn(
                        "hidden text-[16px] font-semibold",
                        "sm:block",
                        "md:text-[18px]"
                    )}
                >
                    Minimal Nest
                </p>

                <span
                    className={cn(
                        "hidden self-stretch my-[4px] w-[3px] rounded-full bg-theme-main",
                        "sm:block"
                    )}
                />

                <h1 className="header-basic">Chi tiết đơn hàng</h1>
            </header>

            <div
                className={cn(
                    "flex flex-col items-start gap-[40px]",
                    "xl:flex-row sm:gap-[20px]"
                )}
            >
                <div className="space-y-[40px] w-full">
                    <PaymentAddress isEdit={false} />
                    <PaymentTable />
                    <PaymentCoupon isEdit={false} />
                    <PaymentMessage isEdit={false} />
                    <PaymentMethod isEdit={false} />
                </div>

                <PaymentSummary isEdit={false} />
            </div>
        </section>
    )
}
"use client"

import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import PaymentAddress from "@/app/(user)/payment/components/PaymentAddress";
import PaymentTable from "@/app/(user)/payment/components/PaymentTable";
import PaymentCoupon from "@/app/(user)/payment/components/PaymentCoupon";
import PaymentMessage from "@/app/(user)/payment/components/PaymentMessage";
import PaymentMethods from "@/app/(user)/payment/components/PaymentMethods";
import PaymentSummary from "@/app/(user)/payment/components/PaymentSummary";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div
            className={cn(
                "space-y-[20px]",
                "sm:space-y-[40px]"
            )}
        >
            <header className="space-y-[40px]">
                <BreadcrumbCustom />

                <div className="flex items-center gap-[15px]">
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

                    <h1 className="header-basic">Thanh toán</h1>
                </div>
            </header>

            <div
                className={cn(
                    "flex flex-col items-start gap-[40px]",
                    "xl:flex-row xl:gap-[20px]"
                )}
            >
                <div className="space-y-[40px] w-full">
                    <PaymentAddress />
                    <PaymentTable />
                    <PaymentCoupon />
                    <PaymentMessage />
                    <PaymentMethods />
                </div>

                <PaymentSummary />
            </div>
        </div>
    )
}
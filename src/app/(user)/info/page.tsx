"use client"

import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import InfoGeneralForm from "@/app/(user)/info/components/InfoGeneralForm";
import InfoNewPasswordForm from "@/app/(user)/info/components/InfoNewPasswordForm";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <BreadcrumbCustom />

            <div className="space-y-[40px]">
                <InfoGeneralForm />
                <InfoNewPasswordForm />
            </div>
        </div>
    )
}
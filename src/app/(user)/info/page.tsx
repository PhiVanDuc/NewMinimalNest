"use client"

import InfoGeneralForm from "@/app/(user)/info/components/InfoGeneralForm";
import InfoNewPasswordForm from "@/app/(user)/info/components/InfoNewPasswordForm";

export default function Page() {
    return (
        <div className="w-full space-y-[40px]">
            <div className="space-y-[40px]">
                <InfoGeneralForm />
                <InfoNewPasswordForm />
            </div>
        </div>
    )
}
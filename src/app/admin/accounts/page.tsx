import { Suspense } from "react";
import AccountsClient from "@/app/admin/accounts/components/AccountsClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <AccountsClient />
        </Suspense>
    )
}
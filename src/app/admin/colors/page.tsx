"use client"

import { Suspense } from "react";
import ColorsClient from "./components/ColorsClient";

export default function Page() {
    return (
        <Suspense>
            <ColorsClient />
        </Suspense>
    )
}

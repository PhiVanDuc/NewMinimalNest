import { Suspense } from "react";
import Filter from "@/app/(user)/products/components/Filter/Filter";
import FilterSync from "@/app/(user)/products/components/Filter/FilterSync";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <>
            <Filter />
            <Suspense fallback=""><FilterSync /></Suspense>
            {children}
        </>
    )
}
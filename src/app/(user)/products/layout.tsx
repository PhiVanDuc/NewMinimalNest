import { Suspense } from "react";
import Filter from "@/app/(user)/products/components/Filter/Filter";
import FilterSync from "@/app/(user)/products/components/Filter/FilterSync";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <>
            <Filter />
            <Suspense fallback={null}><FilterSync /></Suspense>
            {children}
        </>
    )
}
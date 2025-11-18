"use client"

import { usePathname } from "next/navigation";

import InfoOptions from "@/app/(user)/info/components/InfoOptions";

import { cn } from "@/lib/utils";
import infoOptionPaths from "@/consts/info-option-paths";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    const pathname = usePathname();
    const showInfoOption = infoOptionPaths.includes(pathname);

    return (
        <div
            className={cn(
                "relative flex flex-col gap-[40px]",
                "lg:items-start",
                "xl:flex-row"
            )}
        >
            {showInfoOption && <InfoOptions />}
            {children}
        </div>
    )
}
"use client"

import BreadcrumbCustom from "@/components/BreadcrumbCustom";

interface PropsType {
    children: React.ReactNode;
    isBreadcrumb?: boolean
}

export default function Header({ children, isBreadcrumb = true }: Readonly<PropsType>) {
    return (
        <header className="space-y-[40px]">
            {isBreadcrumb && <BreadcrumbCustom />}

            <div>
                {children}
            </div>
        </header>
    )
}

"use client"

import BreadcrumbBase from "@/components/BreadcrumbBase";

interface PropsType {
    children: React.ReactNode;
    isBreadcrumb?: boolean
}

export default function Header({ children, isBreadcrumb = true }: Readonly<PropsType>) {
    return (
        <header className="space-y-[40px]">
            {isBreadcrumb && <BreadcrumbBase />}

            <div>
                {children}
            </div>
        </header>
    )
}

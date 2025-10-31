"use client"

import CustomBreadcrumb from "@/components/CustomBreadcrumb";

interface PropsType {
    children: React.ReactNode;
    isBreadcrumb?: boolean
}

export default function Header({ children, isBreadcrumb = true }: Readonly<PropsType>) {
    return (
        <header className="space-y-[40px]">
            {isBreadcrumb && <CustomBreadcrumb />}

            <div>
                {children}
            </div>
        </header>
    )
}

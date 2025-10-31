"use client"

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { Fragment } from "react";

const list = {
    "products": "Sản phẩm",
    "search": "Tìm kiếm",
    "coupons": "Phiếu giảm giá",
    "cart": "Giỏ hàng",
    "payment": "Thanh toán",
    "info": "Thông tin",
    "book-address": "Sổ địa chỉ",
    "orders": "Đơn hàng",
    "return-orders": "Đơn hoàn trả",
    "return-request": "Hoàn trả"
}

export default function CustomBreadcrumb() {
    const pathname = usePathname();
    const splitPathname = pathname.split("/").filter(Boolean);

    const listBreadcrumb = useMemo(() => {
        return splitPathname.map((item, index) => {
            return {
                name: list[item as keyof typeof list] || item,
                href: "/" + splitPathname.slice(0, index + 1).join("/")
            }
        })
    }, [pathname]);

    return (
        <Breadcrumb>
            <BreadcrumbList className="font-medium">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                {
                    listBreadcrumb.map((item, index) => {
                        const isLast = index === listBreadcrumb.length - 1;

                        return (
                            <Fragment key={index}>
                                <BreadcrumbItem>
                                    {
                                        isLast ? (
                                            <BreadcrumbPage className="text-theme-main font-medium">{item.name}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={item.href} className="hover:text-zinc-800">{item.name}</BreadcrumbLink>
                                        )
                                    }
                                </BreadcrumbItem>

                                {
                                    !isLast && <BreadcrumbSeparator />
                                }
                            </Fragment>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}
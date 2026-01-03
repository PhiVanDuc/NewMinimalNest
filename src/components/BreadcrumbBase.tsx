"use client"

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { Fragment } from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const list = {
    "products": "Sản phẩm",
    "filter": "Kết quả lọc",
    "coupons": "Phiếu giảm giá",
    "return-request": "Hoàn trả",
    "cart": "Giỏ hàng",
    "payment": "Thanh toán",
    "info": "Thông tin",
    "book-address": "Sổ địa chỉ",
    "orders": "Đơn hàng",
    "return-orders": "Đơn hoàn trả",
    "admin": "Trang quản trị",
    "accounts": "Tài khoản",
    "categories": "Danh mục",
    "colors": "Màu sắc",
    "product-settings": "Cài đặt sản phẩm",
    "product-groups": "Nhóm sản phẩm",
    "discounts": "Giảm giá",
    "product-statuses": "Trạng thái sản phẩm",
    "inventory": "Tồn kho",
    "template-excel": "Mẫu Excel",
    "banners": "Banner",
    "add": "Thêm",
    "update": "Cập nhật",
    "request": "Yêu cầu"
}

export default function BreadcrumbBase() {
    const pathname = usePathname();
    const splitPathname = pathname.split("/").filter(Boolean);

    const listBreadcrumb = useMemo(() => {
        return splitPathname.map((item, index) => {
            return {
                label: list[item as keyof typeof list] || item,
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
                                        isLast ?
                                            <BreadcrumbPage className="text-theme-main font-medium">{item.label}</BreadcrumbPage> :
                                            <BreadcrumbLink href={item.href} className="hover:text-zinc-800">{item.label}</BreadcrumbLink>
                                    }
                                </BreadcrumbItem>

                                {!isLast && <BreadcrumbSeparator />}
                            </Fragment>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}
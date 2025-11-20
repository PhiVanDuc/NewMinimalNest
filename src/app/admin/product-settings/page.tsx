"use client"

import Link from "next/link";
import Header from "@/components/Header";

import { LuTags } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";

const settingList = [
    {
        title: "Nhóm sản phẩm",
        desc: "Xem danh sách, thêm, cập nhật và xoá nhóm sản phẩm tại đây.",
        href: "/admin/product-settings/product-groups",
        icon: LuLayoutGrid
    },
    {
        title: "Giảm giá",
        desc: "Xem danh sách, thêm, cập nhật và xoá giảm giá tại đây.",
        href: "/admin/product-settings/discounts",
        icon: RiDiscountPercentLine
    },
    {
        title: "Trạng thái sản phẩm",
        desc: "Xem danh sách và gán trạng thái cho sản phẩm tại đây.",
        href: "/admin/product-settings/product-statuses",
        icon: LuTags
    }
]

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Cài đặt sản phẩm</h1>
                <p className="desc-basic">Tổng hợp các tính năng giúp quản lý sản phẩm dễ dàng và hiệu quả.</p>
            </Header>

            <div className="grid grid-cols-4 gap-[20px]">
                {
                    settingList.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex flex-col items-center justify-center gap-[10px] p-[20px] w-full aspect-square rounded-[10px] border border-zinc-300 bg-white hover:bg-zinc-100"
                            >
                                <div className="flex items-center gap-[10px] text-zinc-700">
                                    <item.icon className="text-[25px]" />
                                    <p className="text-[15px] font-medium">{item.title}</p>
                                </div>

                                <p className="desc-basic text-center">{item.desc}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
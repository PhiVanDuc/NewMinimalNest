"use client"

import { useDispatch } from "react-redux";

import Drawer from "@/components/Drawer";
import DrawerPartTitle from "@/components/DrawerPartTitle";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";
import { categories, statuses, colors, priceRanges } from "@/consts/filter";

function FilterItem(
    {
        children
    }: {
        readonly children: React.ReactNode
    }
) {
    return (
        <li
            className="px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-100 text-[14px] text-zinc-600 font-medium transition-colors cursor-pointer"
        >
            {children}
        </li>
    )
}

export default function FilterClient() {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(
            drawerSlice.actions.close(drawerIds.filter)
        );
    }

    return (
        <Drawer
            id={drawerIds.filter}
            className="gap-[25px]"
        >
            <div className="flex-1 space-y-[25px] px-[20px] overflow-y-auto">
                <div className="space-y-[10px]">
                    <DrawerPartTitle
                        title="Tên sản phẩm"
                    />

                    <Input
                        placeholder="Nhập tên sản phẩm . . ."
                        className="py-[20px]"
                    />
                </div>

                <div className="space-y-[10px]">
                    <DrawerPartTitle
                        title="Đặc điểm"
                    />

                    <Accordion
                        type="single"
                        className="space-y-[5px]"
                        collapsible
                    >
                        {/* Danh mục */}
                        <AccordionItem value="categories">
                            <AccordionTrigger className="hover:bg-zinc-100">Danh mục</AccordionTrigger>

                            <AccordionContent>
                                <ul className="space-y-[5px]">
                                    {
                                        categories.map(category => {
                                            return (
                                                <FilterItem key={category.id}>
                                                    {category.name}
                                                </FilterItem>
                                            )
                                        })
                                    }
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Trạng thái */}
                        <AccordionItem value="statuses">
                            <AccordionTrigger className="hover:bg-zinc-100">Trạng thái</AccordionTrigger>

                            <AccordionContent>
                                <ul className="space-y-[5px]">
                                    {
                                        statuses.map(status => {
                                            return (
                                                <FilterItem key={status.id}>
                                                    {status.name}
                                                </FilterItem>
                                            )
                                        })
                                    }
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Màu sắc */}
                        <AccordionItem value="colors">
                            <AccordionTrigger className="hover:bg-zinc-100">Màu sắc</AccordionTrigger>

                            <AccordionContent>
                                <ul className="space-y-[5px]">
                                    {
                                        colors.map(color => {
                                            return (
                                                <FilterItem key={color.id}>
                                                    <div className="flex items-center gap-[15px]">
                                                        <span
                                                            className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                                                            style={{
                                                                background: color.color
                                                            }}
                                                        />

                                                        <p>{color.name}</p>
                                                    </div>
                                                </FilterItem>
                                            )
                                        })
                                    }
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Khoảng giá */}
                        <AccordionItem value="price-range">
                            <AccordionTrigger className="hover:bg-zinc-100">Khoảng giá</AccordionTrigger>

                            <AccordionContent>
                                <ul className="space-y-[5px]">
                                    {
                                        priceRanges.map(price => {
                                            return (
                                                <FilterItem key={price.id}>
                                                    {price.name}
                                                </FilterItem>
                                            )
                                        })
                                    }
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div className="space-y-[10px] px-[20px]">
                <DrawerPartTitle
                    title="Hành động"
                />

                <div className="flex items-center gap-[5px]">
                    <button
                        className="flex items-center justify-between gap-[10px] px-[20px] py-[9px] w-full text-[14px] text-white font-semibold rounded-[6px] bg-zinc-800 cursor-pointer"
                    >
                        Tìm kiếm

                        <Search size={18} className="translate-y-[-0.5px]" />
                    </button>

                    <button
                        className="shrink-0 px-[20px] py-[9px] text-[14px] text-zinc-800 font-semibold rounded-[6px] cursor-pointer"
                        onClick={handleClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </Drawer>
    )
}
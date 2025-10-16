"use client"

import { useDispatch, useSelector } from "react-redux";
import DrawerPartTitle from "@/components/DrawerPartTitle";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import filterProductSlice from "@/store/slices/filterProduct";
import { categories, statuses, colors, priceRanges } from "@/consts/filter";

import { ReduxStateType } from "@/store/store";
import type { colorType, itemType, priceRangeType } from "@/store/slices/filterProduct";

type SelectFilterType =
    | { type: "categories"; payload: itemType }
    | { type: "statuses"; payload: itemType }
    | { type: "colors"; payload: colorType }
    | { type: "priceRange"; payload: priceRangeType };

export default function FilterList() {
    const dispatch = useDispatch();
    const filter = useSelector((state: ReduxStateType) => state.filterProduct);

    const filterItemClass = "px-[15px] py-[12px] w-full rounded-[10px] bg-white hover:bg-zinc-100 text-left text-[14px] text-zinc-600 font-medium transition-colors cursor-pointer";

    const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            filterProductSlice.actions.setProductName(e.target.value)
        );
    }

    function handleSelectFilter(data: SelectFilterType) {
        switch (data.type) {
            case "categories":
                dispatch(
                    filterProductSlice.actions.toggleCategory(data.payload)
                );
                break;
            case "statuses":
                dispatch(
                    filterProductSlice.actions.toggleStatus(data.payload)
                );
                break;
            case "colors":
                dispatch(
                    filterProductSlice.actions.toggleColor(data.payload)
                );
                break;
            case "priceRange":
                dispatch(
                    filterProductSlice.actions.setPriceRange(data.payload)
                );
                break;
        }
    }

    return (
        <div className="flex-1 space-y-[25px] px-[20px] overflow-y-auto">
            <label className="block space-y-[10px]">
                <DrawerPartTitle
                    title="Tên sản phẩm"
                />

                <Input
                    value={filter.productName}
                    placeholder="Nhập tên sản phẩm . . ."
                    className="py-[20px]"
                    onChange={handleChangeProductName}
                />
            </label>

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
                                        const isSelect = filter.categories.find(categoryF => categoryF.slug === category.slug)

                                        return (
                                            <li key={category.id}>
                                                <button
                                                    className={cn(
                                                        filterItemClass,
                                                        isSelect ? "bg-zinc-100" : ""
                                                    )}
                                                    onClick={() => {
                                                        handleSelectFilter({
                                                            type: "categories",
                                                            payload: category
                                                        })
                                                    }}
                                                >
                                                    {category.name}
                                                </button>
                                            </li>
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
                                        const isSelect = filter.statuses.find(s => s.slug === status.slug);

                                        return (
                                            <li key={status.id}>
                                                <button
                                                    className={cn(
                                                        filterItemClass,
                                                        isSelect ? "bg-zinc-100" : ""
                                                    )}
                                                    onClick={() => {
                                                        handleSelectFilter({
                                                            type: "statuses",
                                                            payload: status
                                                        })
                                                    }}
                                                >
                                                    {status.name}
                                                </button>
                                            </li>
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
                                        const isSelect = filter.colors.find(c => c.slug === color.slug);

                                        return (
                                            <li key={color.id}>
                                                <button
                                                    className={cn(
                                                        filterItemClass,
                                                        isSelect ? "bg-zinc-100" : ""
                                                    )}
                                                    onClick={() => {
                                                        handleSelectFilter({
                                                            type: "colors",
                                                            payload: color
                                                        })
                                                    }}
                                                >
                                                    <div className="flex items-center gap-[15px]">
                                                        <span
                                                            className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                                                            style={{
                                                                background: color.color
                                                            }}
                                                        />

                                                        <p>{color.name}</p>
                                                    </div>
                                                </button>
                                            </li>
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
                                        const isSelect = filter.priceRange?.id === price.id;

                                        return (
                                            <li key={price.id}>
                                                <button
                                                    className={cn(
                                                        filterItemClass,
                                                        isSelect ? "bg-zinc-100" : ""
                                                    )}
                                                    onClick={() => {
                                                        handleSelectFilter({
                                                            type: "priceRange",
                                                            payload: price
                                                        })
                                                    }}
                                                >
                                                    {price.name}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
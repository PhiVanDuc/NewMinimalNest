"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const BadgeSelectorDialog = dynamic(() => import("@/components/BadgeSelectorDialog"), { ssr: false });

import Badge from "@/components/Badge";

import {
    FormItem,
    FormLabel
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

import { categories } from "@/consts/filter";

import type { UseFormReturn } from "react-hook-form";
import type { DiscountFormDataType, DiscountFilterType } from "@/app/admin/product-settings/discounts/types";

interface PropsType {
    form: UseFormReturn<DiscountFormDataType>
}

export default function DiscountFilterForm() {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [filter, setFilter] = useState<DiscountFilterType>({
        name: "",
        categories: []
    });

    const handleSelectCategory = (badge: { label: string, value: string }) => {
        const category = {
            name: badge.label,
            slug: badge.value
        }

        const index = filter.categories.findIndex(fCategory => fCategory.slug === category.slug);

        if (index !== -1) {
            setFilter((state) => {
                const categories = state.categories;
                categories.splice(index, 1);

                return {
                    ...state,
                    categories
                }
            });
        }
        else {
            setFilter((state) => {
                return {
                    ...state,
                    categories: [...state.categories, category]
                };
            });
        }
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(state => {
            return {
                ...state,
                name: e.target.value
            }
        });
    }

    return (
        <>
            <div className="w-[50%] p-[20px] space-y-[20px] rounded-[10px] border border-zinc-300">
                <FormItem>
                    <FormLabel>Danh mục</FormLabel>

                    <div className="flex flex-wrap gap-[6px]">
                        {
                            filter.categories.map((category, index) => {
                                return (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                    >
                                        <p>{category.name}</p>
                                    </Badge>
                                )
                            })
                        }

                        <Badge
                            variant="outline"
                            className="cursor-pointer"
                            onClick={() => { setIsOpenDialog(true) }}
                        >
                            <div className="flex items-center gap-[10px]">
                                <FaPlus className="text-[12px]" />
                                <p>Lựa chọn danh mục</p>
                            </div>
                        </Badge>
                    </div>
                </FormItem>

                <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>

                    <div className="flex gap-[10px]">
                        <Input
                            placeholder="Nhập tên sản phẩm . . ."
                            value={filter.name}
                            onChange={handleChangeName}
                        />

                        <Button
                            type="button"
                            className="h-full"
                        >
                            <IoFilter />
                            Lọc sản phẩm
                        </Button>
                    </div>
                </FormItem>
            </div>

            {
                isOpenDialog && (
                    <BadgeSelectorDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        object="danh mục"
                        data={categories.map(category => ({ label: category.label, value: category.value }))}
                        selectedData={filter.categories.map(category => ({ label: category.name, value: category.slug }))}
                        onClickBadge={handleSelectCategory}
                    />
                )
            }
        </>
    )
}

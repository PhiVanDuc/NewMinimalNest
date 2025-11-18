"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
const ProductGroupsAddFilterDialog = dynamic(() => import("@/app/admin/product-settings/product-groups/add/components/ProductGroupsAddFilterDialog"), { ssr: false });

import Badge from "@/components/Badge";

import {
    FormItem,
    FormLabel
} from "@/components/ui/form";

import { FaPlus } from "react-icons/fa6";

import type { UseFormReturn } from "react-hook-form";
import type { FormValuesType } from "@/app/admin/product-settings/product-groups/add/page.tsx";

interface PropsType {
    form: UseFormReturn<FormValuesType>
}

export interface FilterType {
    name: string,
    categories: {
        name: string,
        slug: string
    }[]
}

export default function ProductGroupsAddFilter({ form }: PropsType) {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const [filter, setFilter] = useState<FilterType>({
        name: "",
        categories: []
    });

    return (
        <>
            <div className="relative pr-[24px] space-y-[20px] w-full">
                <div className="absolute right-0 top-0 bottom-0 w-[4px] h-full rounded-full bg-theme-main" />

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
            </div>

            {
                isOpenDialog && (
                    <ProductGroupsAddFilterDialog
                        isOpen={isOpenDialog}
                        setIsOpen={setIsOpenDialog}
                        filter={filter}
                        setFilter={setFilter}
                    />
                )
            }
        </>
    )
}
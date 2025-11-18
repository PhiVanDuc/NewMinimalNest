"use client"

import { useEffect, useState } from "react";

import Badge from "@/components/Badge";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { categories as filterCategories } from "@/consts/filter";

import type { Dispatch, SetStateAction } from "react";
import type { FilterType } from "@/app/admin/product-settings/product-groups/add/components/ProductGroupsAddFilter";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    filter: FilterType,
    setFilter: Dispatch<SetStateAction<FilterType>>
}

export default function ProductGroupsAddFilterDialog({ isOpen, setIsOpen, filter, setFilter }: PropsType) {
    const [categoryName, setCategoryName] = useState("");
    const [debouncedCategoryName, setDebouncedCategoryName] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedCategoryName(categoryName) }, 500);
        return () => clearTimeout(handler);
    }, [categoryName]);

    const categories = filterCategories.map(category => ({
        name: category.label,
        slug: category.value
    }));

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(debouncedCategoryName.toLowerCase())
    );

    const handleClickChooseCategory = (category: { name: string, slug: string }) => {
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

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Lựa chọn danh mục</DialogTitle>
                    <DialogDescription>Tìm kiếm và lựa chọn danh mục cho sản phẩm tại đây.</DialogDescription>
                </DialogHeader>

                <div className="px-[20px] space-y-[20px]">
                    <Input
                        placeholder="Lọc tên danh mục . . ."
                        value={categoryName}
                        onChange={e => setCategoryName(e.target.value)}
                    />

                    <div className="flex flex-wrap gap-[6px]">
                        {
                            filteredCategories.length === 0 ?
                                (
                                    <div className="flex justify-center w-full">
                                        <p className="desc-basic">Danh mục không tồn tại!</p>
                                    </div>
                                ) :
                                filteredCategories.map(category => {
                                    const isActive = filter.categories.find(fCategory => fCategory.slug === category.slug);

                                    return (
                                        <Badge
                                            key={category.slug}
                                            variant="outline"
                                            className={cn(
                                                "transition-colors cursor-pointer",
                                                isActive ? "bg-zinc-100 border-zinc-100" : "bg-white hover:bg-zinc-100 hover:border-zinc-100"
                                            )}
                                            onClick={() => { handleClickChooseCategory(category) }}
                                        >
                                            <p>{category.name}</p>
                                        </Badge>
                                    )
                                })
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
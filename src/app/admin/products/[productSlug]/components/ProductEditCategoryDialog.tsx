"use client"

import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";

import Badge from "@/components/Badge";
import { Input } from "@/components/ui/input";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { categories as filterCategories } from "@/consts/filter";

import type { UseFormReturn } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
import type { FormValuesType } from "@/app/admin/products/[productSlug]/page";
import { cn } from "@/lib/utils";

interface PropsType {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    form: UseFormReturn<FormValuesType>
}

export default function ProductEditCategoryDialog({ isOpen, setIsOpen, form }: PropsType) {
    const [categories] = useState(() =>
        filterCategories.map(category => ({
            name: category.label,
            slug: category.value
        }))
    );

    const [categoryName, setCategoryName] = useState("");
    const [debouncedCategoryName, setDebouncedCategoryName] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedCategoryName(categoryName);
        }, 500);

        return () => clearTimeout(handler);
    }, [categoryName]);

    const field = useFieldArray({
        control: form.control,
        name: "categories",
        keyName: "_id"
    });

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(debouncedCategoryName.toLowerCase())
    );

    const handleClickChooseCategory = (category: { name: string, slug: string }) => {
        const index = field.fields.findIndex(item => item.slug === category.slug);

        if (index !== -1) field.remove(index);
        else field.append(category);
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
                                filteredCategories.map((category, index) => {
                                    const existing = field.fields.find(element => category.slug === element.slug);

                                    return (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className={cn(
                                                "transition-colors cursor-pointer",
                                                existing ? "bg-zinc-100 border-zinc-100" : "bg-white hover:bg-zinc-100 hover:border-zinc-100"
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
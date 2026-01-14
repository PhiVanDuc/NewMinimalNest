"use client"

import Link from "next/link";
import Image from "next/image";
import Price from "@/components/Price";
import Badge from "@/components/Badge";
import ProductsDeleteAction from "@/app/admin/products/components/ProductsDeleteAction";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { HiDotsVertical } from "react-icons/hi";
import { IoReloadOutline } from "react-icons/io5";

import type { ColumnDef } from "@tanstack/react-table";

const productColumns: ColumnDef<ProductCard>[] = [
    {
        accessorKey: "product",
        header: () => <h3 className="header-table">Sản phẩm</h3>,
        cell: ({ row }) => {
            const { name, colors, image } = row.original;

            return (
                <div className="flex items-stretch gap-[15px]">
                    <div className="w-[80px] aspect-square rounded-[10px] overflow-hidden">
                        <Image
                            src={image.url}
                            alt={`Ảnh sản phẩm ${name.toLowerCase()}`}
                            width={80}
                            height={80}
                            className="w-full aspect-square object-center object-cover"
                            placeholder="blur"
                            blurDataURL={image.blurUrl}
                        />
                    </div>

                    <div className="self-stretch flex flex-col justify-between">
                        <div className="space-y-[4px]">
                            <p className="header-table-row">{name}</p>

                            <Price className="text-[14px]" />
                        </div>

                        <div className="flex flex-wrap items-center space-x-[-5px]">
                            {
                                colors.map(color => (
                                    <span
                                        key={color.id}
                                        className="shrink-0 size-[18px] rounded-full transition-colors cursor-pointer outline-[3px] outline-white"
                                        style={{ backgroundColor: color.colorCode }}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "categories",
        header: () => <h3 className="header-table">Danh mục</h3>,
        cell: ({ row }) => {
            const { categories } = row.original;

            return (
                <div className="flex flex-wrap gap-[6px]">
                    {
                        categories.map(category => (
                            <Badge
                                key={category.id}
                                variant="outline"
                            >
                                <p>{category.name}</p>
                            </Badge>
                        ))
                    }
                </div>
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h3 className="header-table">Giá bán</h3>,
        cell: () => {
            return (
                <Price className="text-[15px]" />
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => <h3 className="header-table">Giảm giá</h3>,
        cell: () => {
            return (
                <Price className="text-[15px]" />
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className="header-table text-center">Hành động</h3>,
        cell: ({ row }) => {
            const { id } = row.original;

            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="size-[35px] flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer">
                            <HiDotsVertical
                                size={18}
                                className="text-zinc-700"
                            />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href={`/admin/products/update/${id}`}>
                                    <IoReloadOutline />
                                    Cập nhật
                                </Link>
                            </DropdownMenuItem>

                            <ProductsDeleteAction />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default productColumns;
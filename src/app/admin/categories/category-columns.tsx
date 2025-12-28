"use client"

import CategoryActionOptions from "@/app/admin/categories/components/CategoryActionOptions";

import type { ColumnDef } from "@tanstack/react-table";
import type { CategoryDataType } from "@/app/admin/categories/types";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const categoryColumns: ColumnDef<CategoryDataType>[] = [
    {
        accessorKey: "category",
        header: () => <h3 className={headerClassName}>Danh mục</h3>,
        cell: ({ row }) => {
            const { name } = row.original;

            return (
                <p className="header-table-row">{name}</p>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className={headerClassName + " text-center"}>Hành động</h3>,
        cell: ({ row }) => {
            return <CategoryActionOptions data={row.original} />
        }
    }
];

export default categoryColumns;
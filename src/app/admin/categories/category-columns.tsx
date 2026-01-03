"use client"

import CategoryActionOptions from "@/app/admin/categories/components/CategoryActionOptions";

import type { ColumnDef } from "@tanstack/react-table";

const categoryColumns: ColumnDef<Category>[] = [
    {
        accessorKey: "category",
        header: () => <h3 className="header-table">Danh mục</h3>,
        cell: ({ row }) => {
            const { name } = row.original;
            return <p className="header-table-row">{name}</p>
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className="header-table text-center">Hành động</h3>,
        cell: ({ row }) => {
            const { id } = row.original;
            return <CategoryActionOptions id={id} />
        }
    }
];

export default categoryColumns;
"use client"

import ColorActionOptions from "@/app/admin/colors/components/ColorActionOptions";

import type { ColumnDef } from "@tanstack/react-table";

const colorColumns: ColumnDef<Color>[] = [
    {
        accessorKey: "color",
        header: () => <h3 className="header-table">Màu sắc</h3>,
        cell: ({ row }) => {
            const { name, colorCode } = row.original;

            return (
                <div className="flex items-center gap-[15px]">
                    <span
                        className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                        style={{ background: colorCode }}
                    />

                    <p className="header-table-row">{name}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className="header-table text-center">Hành động</h3>,
        cell: ({ row }) => {
            const { id } = row.original;
            return <ColorActionOptions id={id} />
        }
    }
];

export default colorColumns;
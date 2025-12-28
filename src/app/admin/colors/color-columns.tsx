"use client"

import ColorActionOptions from "@/app/admin/colors/components/ColorActionOptions";

import type { ColumnDef } from "@tanstack/react-table";
import type { ColorDataType } from "@/app/admin/colors/types";

const headerClassName = "text-[14px] text-zinc-700 font-medium";

const colorColumns: ColumnDef<ColorDataType>[] = [
    {
        accessorKey: "color",
        header: () => <h3 className={headerClassName}>Màu sắc</h3>,
        cell: ({ row }) => {
            const { color_code, name } = row.original;

            return (
                <div className="flex items-center gap-[15px]">
                    <span
                        className="w-[20px] aspect-square rounded-full outline-[2px] outline-offset-2 outline-zinc-100"
                        style={{ background: color_code }}
                    />

                    <p className="header-table-row">{name}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h3 className={headerClassName + " text-center"}>Hành động</h3>,
        cell: ({ row }) => {
            return <ColorActionOptions data={row.original} />
        }
    }
];

export default colorColumns;
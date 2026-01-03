"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

import { cn } from "@/libs/utils";

interface Props<TData, TValue> {
    data: TData[],
    columns: ColumnDef<TData, TValue>[],
    isLoading?: boolean
}

export default function DataTable<TData, TValue>({ data = [], columns, isLoading = false }: Props<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <Table className="border-separate border-spacing-y-[10px]">
            <TableHeader>
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <TableRow
                            key={headerGroup.id}
                            className="group bg-zinc-100 hover:bg-zinc-100 border-none"
                        >
                            {
                                headerGroup.headers.map((header, index) => (
                                    <TableHead
                                        key={header.id}
                                        className={cn(
                                            "!p-[15px] !px-[20px] !h-fit bg-transparent",
                                            index === 0 ? "rounded-tl-[10px] rounded-bl-[10px]" : "",
                                            index === headerGroup.headers.length - 1 ? "rounded-tr-[10px] rounded-br-[10px]" : ""
                                        )}
                                    >
                                        {
                                            header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                        }
                                    </TableHead>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableHeader>

            <TableBody>
                {
                    isLoading ?
                        (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center rounded-[10px] bg-transparent hover:bg-zinc-100">
                                    Đang tải dữ liệu . . .
                                </TableCell>
                            </TableRow>
                        ) :
                        data.length ?
                            (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="group hover:bg-transparent border-none"
                                    >
                                        {
                                            row.getVisibleCells().map((cell, index) => (
                                                <TableCell
                                                    key={cell.id}
                                                    className={cn(
                                                        "!p-[15px] !px-[20px] !h-fit bg-transparent group-hover:bg-zinc-100",
                                                        index === 0 ? "rounded-tl-[10px] rounded-bl-[10px]" : "",
                                                        index === row.getVisibleCells().length - 1 ? "rounded-tr-[10px] rounded-br-[10px]" : ""
                                                    )}
                                                >
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            ) :
                            (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center rounded-[10px] bg-transparent hover:bg-zinc-100">
                                        Danh sách trống!
                                    </TableCell>
                                </TableRow>
                            )
                }
            </TableBody>
        </Table>
    )
}
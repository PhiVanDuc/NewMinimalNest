import { RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
    interface ColumnMeta<TData extends RowData> {
        [key: string]: string | number | boolean | Record<string, unknown> | unknown[];
    }
}
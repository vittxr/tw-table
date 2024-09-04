import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
export interface TableProps<TData> {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    serverSide?: boolean;
}
export declare const Table: <TData extends object>({ columns, data, }: TableProps<TData>) => React.JSX.Element;

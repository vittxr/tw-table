import React from 'react';
import '@/index.css';
import { ColumnDef } from '@tanstack/react-table';
type Props<TData> = {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    serverSide?: boolean;
};
declare const Table: <TData extends object>({ columns, data, serverSide }: Props<TData>) => React.JSX.Element;
export default Table;

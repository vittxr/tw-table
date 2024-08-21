import { ColumnDef, ColumnFilter, OnChangeFn, ColumnFiltersState } from '@tanstack/react-table';
import React from 'react';

type Props<TData> = {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    title?: string;
    search?: any;
    sort?: any;
    selection?: any;
    toolbar?: React.ReactNode;
    pagination?: any;
    isLoading?: boolean;
    columnFilters: ColumnFilter[];
    setColumnFilters: OnChangeFn<ColumnFiltersState>;
};
declare const Table: <TData extends object>({ columns, data, search, sort, selection, toolbar, title, pagination, isLoading, columnFilters, setColumnFilters, }: Props<TData>) => React.JSX.Element;

export { Table };

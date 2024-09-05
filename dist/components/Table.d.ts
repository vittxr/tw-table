import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ResponsivenessType } from './types';
export interface TableProps<TData> {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    serverSide?: boolean;
    responsivenessType?: ResponsivenessType;
}
export declare const Table: <TData extends object>({ columns, data, responsivenessType, }: TableProps<TData>) => React.JSX.Element;

import React from 'react';
import { Column } from '@tanstack/react-table';
export default function TableFilter<TData>({ column, }: {
    column: Column<TData, unknown>;
}): React.JSX.Element;

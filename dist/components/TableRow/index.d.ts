import React from 'react';
import { Row } from '@tanstack/react-table';
import { Selection } from '../../components/types';
declare type Props<TData> = {
    row: Row<TData>;
    selection?: Selection;
};
declare const TableRow: <TData extends object>({ row, selection }: Props<TData>) => React.JSX.Element;
export default TableRow;

import React from 'react';
import { Row } from '@tanstack/react-table';
import { ResponsivenessType, Selection } from '../../components/types';
declare type Props<TData> = {
    row: Row<TData>;
    selection?: Selection;
    responsivenessType?: ResponsivenessType;
};
declare const TableRow: <TData extends object>({ row, selection, responsivenessType }: Props<TData>) => React.JSX.Element;
export default TableRow;

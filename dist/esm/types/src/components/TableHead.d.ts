import React from 'react';
import { HeaderGroup } from '@tanstack/react-table';
type Props<TData> = {
    headerGroup: HeaderGroup<TData>;
};
declare const TableHead: <TData extends object>({ headerGroup }: Props<TData>) => React.JSX.Element;
export default TableHead;

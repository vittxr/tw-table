import React from 'react';
import { HeaderGroup } from '@tanstack/react-table';
import { ResponsivenessType } from '../types';
declare type Props<TData> = {
    headerGroup: HeaderGroup<TData>;
    responsivenessType?: ResponsivenessType;
};
declare const TableHead: <TData extends object>({ headerGroup }: Props<TData>) => React.JSX.Element;
export default TableHead;

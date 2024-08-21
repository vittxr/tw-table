import { Table } from '@tanstack/react-table';
import React from 'react';
type Props = {
    table: Table<any>;
};
declare const Pagination: ({ table }: Props) => React.JSX.Element;
export default Pagination;

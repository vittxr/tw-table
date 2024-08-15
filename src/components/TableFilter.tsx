import React from 'react';
import { Column } from '@tanstack/react-table';
import Input from './Input';

// Define an extended type for ColumnMeta that includes filterVariant
interface ExtendedColumnMeta {
  filterVariant?: 'range' | 'select' | 'text';
}

export default function TableFilter<TData>({
  column,
}: {
  column: Column<TData, unknown>;
}) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = (column.columnDef.meta as ExtendedColumnMeta) ?? {};

  return filterVariant === 'range' ? (
    <div>
      <p>not implemented lol</p>
    </div>
  ) : filterVariant === 'select' ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      <option value="">not implemented lol</option>
    </select>
  ) : (
    <Input
      className="border-none animate-scale-x"
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`${column.columnDef.header}...`}
      type="text"
      value={(columnFilterValue ?? '') as string}
      autoFocus={true}
    />
  );
}

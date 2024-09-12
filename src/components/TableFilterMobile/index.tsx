import React from 'react';
import InputWithSelect from '../inputs/InputWithSelect';
import { Table } from '@tanstack/react-table';
import Select from '../inputs/Select';

type Props<TData> = {
  table: Table<TData>;
};

/**
 * Renders a mobile version of the table filter.
 *
 * @param props - The component props.
 * @returns The rendered mobile table filter.
 */
const TableFilterMobile = <TData extends object>({ table }: Props<TData>) => {
  const headerGroups = table
    .getHeaderGroups()
    .map((headerGroup) => headerGroup);
  const headers = headerGroups.flatMap((headerGroup) => headerGroup.headers);
  const searchableColumns = headers.filter((header) =>
    header.column.getCanFilter(),
  );

  const sortableColumns = headers.filter((header) =>
    header.column.getCanSort(),
  );

  return (
    <div className="w-full block sm:hidden my-2">
      <div className="">
        <InputWithSelect
          id={'search'}
          label={'Search'}
          placeholder="Search..."
          options={searchableColumns.map((header) => ({
            value: header.id as string,
            label: header.column.columnDef.header as string,
          }))}
        />
      </div>

      <div className="">
        <Select
          id="sort"
          label="Sort by"
          options={sortableColumns.map((header) => ({
            value: header.id as string,
            label: header.column.columnDef.header as string,
          }))}
        />
      </div>
    </div>
  );
};

export default TableFilterMobile;

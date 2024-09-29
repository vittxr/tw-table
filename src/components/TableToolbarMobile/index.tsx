import React from 'react';
import InputWithSelect from '../inputs/InputWithSelect';
import { SortingState, Table } from '@tanstack/react-table';
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
const TableToolbarMobile = <TData extends object>({ table }: Props<TData>) => {
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
    <div className="w-full block sm:hidden space-y-2 my-2">
      <div className="w-full">
        <InputWithSelect
          id={'search'}
          label={'Search'}
          placeholder="Search..."
          options={searchableColumns.map((header) => ({
            value: header.id as string,
            label: header.column.columnDef.header as string,
          }))}
          onChange={(selectedId: string, inputValue: string) => {
            const header = searchableColumns.find(
              (header) => header.id === selectedId,
            );
            if (header) {
              header.column.setFilterValue(inputValue);
            }
          }}
        />
      </div>

      {/**TODO: It would be better implement multi-column sorting */}
      <div className="w-full grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <Select
            id="sort_direction"
            label="Sort Dir"
            options={[
              {
                value: 'asc',
                label: 'Asc',
              },
              {
                value: 'desc',
                label: 'Desc',
              },
            ]}
            onChange={(e) => {
              table.setSorting((old: SortingState) => {
                const newSorting = old.map((sort) => ({
                  id: sort.id ? sort.id : sortableColumns[0].id,
                  desc: e.target.value === 'desc',
                }));
                console.log('new sorting', newSorting);
                return newSorting;
              });
            }}
          />
        </div>

        <div className="col-span-8">
          <Select
            id="sort"
            label="Sort by"
            options={sortableColumns.map((header) => ({
              value: header.id as string,
              label: header.column.columnDef.header as string,
            }))}
            onChange={(e) => {
              table.setSorting((updater) => {
                return [
                  {
                    id: e.target.value,
                    desc: updater.length ? updater[0].desc : false,
                  },
                ];
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableToolbarMobile;

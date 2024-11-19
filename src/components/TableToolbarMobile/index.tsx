import React from 'react';
import InputWithSelect from '../inputs/InputWithSelect';
import { SortingState, Table } from '@tanstack/react-table';
import Select from '../inputs/Select';
import { useLabels } from '../../providers/LabelsProvider';

type Props<TData> = {
  table: Table<TData>;
  forceHidden?: boolean;
  forceShow?: boolean;
};

/**
 * Renders a mobile version of the table filter.
 *
 * @param props - The component props.
 * @returns The rendered mobile table filter.
 */
const TableToolbarMobile = <TData extends object>({
  table,
  forceHidden = false,
  forceShow = false,
}: Props<TData>) => {
  const { texts } = useLabels();
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

  const responsivenessClassname = forceShow
    ? 'block'
    : forceHidden
      ? 'hidden'
      : 'sm:hidden';
  return (
    <div className={`w-full block ${responsivenessClassname} space-y-2 my-2`}>
      <div className="w-full">
        <InputWithSelect
          id={'search'}
          label={texts.search!.label as string}
          placeholder={texts.search!.placeholder}
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
            label={texts.sort!.dir as string}
            options={[
              {
                value: 'asc',
                label: texts.sort!.asc as string,
              },
              {
                value: 'desc',
                label: texts.sort!.desc as string,
              },
            ]}
            onChange={(e) => {
              table.setSorting((old: SortingState) => {
                const newSorting = old.map((sort) => ({
                  id: sort.id ? sort.id : sortableColumns[0].id,
                  desc: e.target.value === 'desc',
                }));
                return newSorting;
              });
            }}
          />
        </div>

        <div className="col-span-8">
          <Select
            id="sort"
            label={texts.sort!.by as string}
            options={[
              { value: 'None', label: 'None' },
              ...sortableColumns.map((header) => ({
                value: header.id as string,
                label: header.column.columnDef.header as string,
              })),
            ]}
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

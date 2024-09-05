import React from 'react';
import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  SortingState,
  PaginationState,
} from '@tanstack/react-table';
import TableRow from './TableRow';
import TableHead from './TableHead';
import Pagination from './Pagination';
import clsx from 'clsx';
import { MOBILE_TABLE_HEAD_CLASSNAMES } from './tw_classnames';
import { ResponsivenessType } from './types';

export interface TableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  responsivenessType?: ResponsivenessType; // I'll add more options in the future.
  serverSide?: boolean;
}

export const Table = <TData extends object>({
  columns,
  data,
  responsivenessType = 'card',
  serverSide = false,
}: TableProps<TData>) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    columns,
    data,
    filterFns: {}, // devs can pass advanced filter functions here
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    enableSortingRemoval: false,
    manualPagination: serverSide,
  });

  return (
    <div className="flex flex-col flex-end">
      <div className="overflow-x-auto">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead
              className={clsx(
                'bg-gray-50 border',
                responsivenessType &&
                  MOBILE_TABLE_HEAD_CLASSNAMES[responsivenessType],
              )}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHead
                  key={headerGroup.id}
                  headerGroup={headerGroup}
                  responsivenessType={responsivenessType}
                />
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table
                  .getRowModel()
                  .rows.map((row) => (
                    <TableRow
                      key={row.id}
                      row={row}
                      responsivenessType={responsivenessType}
                    />
                  ))
              ) : (
                <tr className="text-center h-32">
                  <td colSpan={12}>Empty</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {pagination && <Pagination table={table} />}
    </div>
  );
};

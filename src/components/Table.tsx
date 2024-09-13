import React from 'react';
import clsx from 'clsx';
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
  OnChangeFn,
} from '@tanstack/react-table';
import TableRow from './TableRow';
import TableHead from './TableHead';
import Pagination from './Pagination';
import { MOBILE_TABLE_HEAD_CLASSNAMES } from './tw_classnames';
import { ResponsivenessType } from './types';
import TableToolbarMobile from './TableToolbarMobile';

export interface TableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  responsivenessType?: ResponsivenessType; // I'll add more options in the future.
  serverSide?: boolean;
  pagination?: PaginationState;
  setPagination?: OnChangeFn<PaginationState> | undefined;
  rowCount?: number;
  columnFilters?: ColumnFiltersState;
  setColumnFilters?: OnChangeFn<ColumnFiltersState>;
}

export const Table = <TData extends object>({
  columns,
  data,
  responsivenessType = 'card',
  serverSide = false,
  pagination,
  setPagination,
  rowCount = 0,
  columnFilters,
  setColumnFilters,
}: TableProps<TData>) => {
  // states prefixed with undescore are used for client-side features.
  const [_columnFilters, _setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [_pagination, _setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    columns,
    data,
    filterFns: {}, // devs can pass advanced filter functions here
    onColumnFiltersChange: !serverSide ? _setColumnFilters : setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: !serverSide ? getFilteredRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: !serverSide ? getPaginationRowModel() : undefined,
    onSortingChange: setSorting,
    onPaginationChange: !serverSide ? _setPagination : setPagination,
    state: {
      sorting,
      pagination: !serverSide ? _pagination : pagination,
      columnFilters: !serverSide ? _columnFilters : columnFilters,
    },
    rowCount: !serverSide ? undefined : rowCount,
    enableSortingRemoval: false,
    manualPagination: serverSide,
  });

  return (
    <div className="flex flex-col flex-end">
      <div className="overflow-x-auto">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <TableToolbarMobile table={table} />

          <table className="min-w-full divide-y divide-gray-200 relative">
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

      <Pagination table={table} />
    </div>
  );
};

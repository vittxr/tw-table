import { useEffect } from 'react';
import '@/index.css'
import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  OnChangeFn,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFilter,
  ColumnFiltersState,
} from '@tanstack/react-table';
// import Pagination, { TPagination } from './components/Pagination';
import { TableRow, TableHead, Pagination } from '@/components/';
import React from 'react';

type Props<TData> = {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  title?: string;
  search?: any;
  sort?: any;
  selection?: any;
  toolbar?: React.ReactNode;
  pagination?: any;
  isLoading?: boolean;
  columnFilters: ColumnFilter[];
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
};

const Table = <TData extends object>({
  columns,
  data,
  search,
  sort,
  selection,
  toolbar,
  title,
  pagination,
  isLoading,
  columnFilters,
  setColumnFilters,
}: Props<TData>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: !!selection,
    enableMultiRowSelection: selection?.type === 'multiple',
    manualSorting: true,
    state: {
      rowSelection: selection?.state,
      sorting: sort?.state,
      columnFilters,
    },
    onRowSelectionChange: selection?.setState,
    enableSortingRemoval: false,
    onSortingChange: sort?.setState,
    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,
  });

  useEffect(() => {
    search?.setState({
      ...search.state,
      q: columnFilters
        .map((filter) => `${filter.id} LIKE '${filter.value}%'`)
        .join(','),
    });
  }, [columnFilters]);

  useEffect(() => {
    search?.setState({
      ...search?.state,
      order_by: sort?.state.map((order: any) => order.id).join(','),
      order: sort?.state
        .map((order: any) => (order.desc ? 'desc' : 'asc'))
        .join(','),
    });
  }, [sort?.state]);

  return (
    <div className="flex flex-col flex-end">
      <div className="flex justify-between items-center my-2">
        <h2 className="font-medium text-xl">{title}</h2>
        {toolbar}
      </div>

      <div className="overflow-x-auto">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 border">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHead key={headerGroup.id} headerGroup={headerGroup} />
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table
                  .getRowModel()
                  .rows.map((row) => (
                    <TableRow key={row.id} row={row} selection={selection} />
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

      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          rowsCount={pagination.rowsCount}
          pageRange={pagination.pageRange}
          onPageChange={pagination.onPageChange}
        />
      )}
    </div>
  );
};

export default Table;

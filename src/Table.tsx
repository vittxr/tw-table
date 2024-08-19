import '@/index.css'
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
// import Pagination, { TPagination } from './components/Pagination';
import { TableRow, TableHead, Pagination } from '@/components/';
import React from 'react';

type Props<TData> = {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  title?: string;
  isLoading?: boolean;
  serverSide?: boolean
};

const Table = <TData extends object>({
  columns,
  data,
  serverSide = false
}: Props<TData>) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const table = useReactTable({
    columns,
    data,
    filterFns: {},
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
  });

  return (
    <div className="flex flex-col flex-end">
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
                    <TableRow key={row.id} row={row}  />
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
          table={table}
        />
      )}
    </div>
  );
};

export default Table;

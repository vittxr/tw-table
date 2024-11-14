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
  RowSelectionState,
} from '@tanstack/react-table';
import TableRow from './TableRow';
import TableHead from './TableHead';
import Pagination from './Pagination';
import {
  RESPONSIVE_TABLE_HEAD_CLASSNAMES,
  TABLE_HEAD_CLASSNAMES,
} from './tw_classnames';
import { ResponsivenessType } from './types';
import TableToolbarMobile from './TableToolbarMobile';
import { UITexts, uiTexts } from '../constants/texts';
import LabelsProvider from '../providers/LabelsProvider';
import { deepMerge } from '../utils/functions/deepMerge';
import TableRowSkeleton from './TableRowSkeleton';

export interface TwTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  responsivenessType?: ResponsivenessType;
  serverSide?: boolean;
  pagination?: PaginationState;
  setPagination?: OnChangeFn<PaginationState> | undefined;
  rowCount?: number;
  columnFilters?: ColumnFiltersState;
  setColumnFilters?: OnChangeFn<ColumnFiltersState>;
  rowSelection?: RowSelectionState;
  setRowSelection?: OnChangeFn<RowSelectionState>;
  enableMultiRowSelection?: boolean;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
  texts?: UITexts;
  isLoading?: boolean;
  viewType?: ResponsivenessType; // this takes precedence over responsivenessType.
}

export const TwTable = <TData extends object>({
  columns,
  data,
  responsivenessType = 'card',
  serverSide = false,
  pagination,
  setPagination,
  rowCount = 0,
  columnFilters,
  setColumnFilters,
  rowSelection,
  setRowSelection,
  enableMultiRowSelection,
  sorting,
  setSorting,
  texts = uiTexts,
  isLoading = false,
  viewType,
}: TwTableProps<TData>) => {
  // states prefixed with undescore are used for client-side features.
  const [_columnFilters, _setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [_sorting, _setSorting] = React.useState<SortingState>([]);
  const [_pagination, _setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const _texts = deepMerge(uiTexts, texts);
  const table = useReactTable({
    columns,
    data,
    filterFns: {}, // devs can pass advanced filter functions here
    onColumnFiltersChange: !serverSide
      ? _setColumnFilters
      : setColumnFilters || _setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: !serverSide ? getFilteredRowModel() : undefined,
    getSortedRowModel: !serverSide ? getSortedRowModel() : undefined,
    getPaginationRowModel: !serverSide ? getPaginationRowModel() : undefined,
    onSortingChange: !serverSide ? _setSorting : setSorting || _setSorting,
    onPaginationChange: !serverSide
      ? _setPagination
      : setPagination || _setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting: !serverSide ? _sorting : sorting || _sorting,
      pagination: !serverSide ? _pagination : pagination || _pagination,
      columnFilters: !serverSide
        ? _columnFilters
        : columnFilters || _columnFilters,
      rowSelection: rowSelection,
    },
    rowCount: !serverSide ? undefined : rowCount,
    enableSortingRemoval: false,
    manualPagination: serverSide,
    enableRowSelection: rowSelection ? true : false,
    enableMultiRowSelection: enableMultiRowSelection,
  });

  return (
    <LabelsProvider texts={_texts}>
      <div className="flex flex-col flex-end bg-white dark:bg-gray-900 text-black dark:text-gray-300">
        <div className="overflow-x-auto">
          <div className="shadow overflow-x-auto sm:rounded-lg">
            <TableToolbarMobile
              table={table}
              displayOnLargeScreens={
                (viewType && viewType !== 'scroll') || false
              }
            />

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 relative">
              <thead
                className={clsx(
                  'bg-gray-50 border',
                  responsivenessType &&
                    !viewType &&
                    RESPONSIVE_TABLE_HEAD_CLASSNAMES[responsivenessType],
                  viewType && TABLE_HEAD_CLASSNAMES[viewType],
                )}
              >
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableHead
                    key={headerGroup.id}
                    headerGroup={headerGroup}
                    enableMultiRowSelection={enableMultiRowSelection}
                    isAllRowsSelected={
                      rowSelection && table.getIsAllRowsSelected()
                    }
                    toggleAllRowsSelectedHandler={
                      rowSelection && table.getToggleAllRowsSelectedHandler()
                    }
                  />
                ))}
              </thead>

              <tbody>
                {isLoading ? (
                  <>
                    {Array.from(
                      Array(
                        pagination?.pageSize || _pagination.pageSize,
                      ).keys(),
                    ).map((_, idx) => (
                      <TableRowSkeleton colsLength={columns.length} key={idx} />
                    ))}
                  </>
                ) : table.getRowModel().rows.length === 0 ? (
                  <tr className="text-center h-32">
                    <td colSpan={12}>{_texts.empty}</td>
                  </tr>
                ) : (
                  table
                    .getRowModel()
                    .rows.map((row) => (
                      <TableRow
                        key={row.id}
                        row={row}
                        viewType={viewType}
                        responsivenessType={responsivenessType}
                      />
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination table={table} />
      </div>
    </LabelsProvider>
  );
};

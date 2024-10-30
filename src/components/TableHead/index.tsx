import React, { useState } from 'react';
import { flexRender, HeaderGroup } from '@tanstack/react-table';
import TableFilter from '../TableFilter';
import Icon from '../../icons';
import clsx from 'clsx';
import { MOBILE_TABLE_ROW_CLASSNAMES } from '../tw_classnames';
import { ResponsivenessType } from '../types';

type Props<TData> = {
  headerGroup: HeaderGroup<TData>;
  responsivenessType?: ResponsivenessType;
  enableMultiRowSelection?: boolean;
  isAllRowsSelected?: boolean;
  toggleAllRowsSelectedHandler?: (event: unknown) => void;
};

const TableHead = <TData extends object>({
  headerGroup,
  enableMultiRowSelection,
  isAllRowsSelected,
  toggleAllRowsSelectedHandler,
}: Props<TData>) => {
  const [targetSearchCol, setTargetSearchCol] = useState<string | null>(null);
  return (
    <>
      <tr
        key={headerGroup.id}
        className={clsx('w-full', MOBILE_TABLE_ROW_CLASSNAMES)}
      >
        {headerGroup.headers.map((header, idx) => (
          <th
            key={header.id}
            className="px-3.5 py-2 text-left min-w-48 max-w-48 h-14 dark:bg-gray-800 dark:text-gray-300"
            onBlur={() => {
              if (header.column.getFilterValue()) return;
              setTargetSearchCol(null);
            }}
            scope="col"
          >
            {targetSearchCol !== header.id && (
              <div className="flex justify-between items-center">
                {idx === 0 && enableMultiRowSelection && (
                  <div className="flex items-center mr-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={isAllRowsSelected}
                      onChange={toggleAllRowsSelectedHandler}
                    />
                  </div>
                )}

                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}

                <div className="flex space-x-2">
                  {header.column.getCanFilter() && (
                    <button
                      className="p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-900"
                      onClick={() =>
                        header.column.getCanFilter() &&
                        setTargetSearchCol(header.id)
                      }
                    >
                      <Icon name="magnifying-glass" className="h-3 w-3" />
                    </button>
                  )}

                  {header.column.getCanSort() && (
                    <div className="flex flex-col">
                      <button
                        className="p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-900"
                        onClick={() => header.column.toggleSorting()}
                      >
                        {header.column.getIsSorted() === false ? (
                          <Icon name="dash" className="h-3 w-3" />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <Icon name="chevron-down" className="h-3 w-3" />
                        ) : (
                          <Icon name="chevron-up" className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {targetSearchCol === header.id && header.column.getCanFilter() && (
              <TableFilter column={header.column} />
            )}
          </th>
        ))}
      </tr>
    </>
  );
};

export default TableHead;

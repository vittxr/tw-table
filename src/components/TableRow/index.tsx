import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { ResponsivenessType } from '../../components/types';
import clsx from 'clsx';
import {
  RESPONSIVE_TABLE_DESCRIPTION_CLASSNAMES,
  RESPONSIVE_TABLE_ROW_CHECKBOX_CLASSNAMES,
  RESPONSIVE_TABLE_ROW_CLASSNAMES,
  TABLE_DESCRIPTION_CLASSNAMES,
  TABLE_ROW_CHECKBOX_CLASSNAMES,
  TABLE_ROW_CLASSNAMES,
} from '../tw_classnames';

type Props<TData> = {
  row: Row<TData>;
  responsivenessType?: ResponsivenessType;
  viewType?: ResponsivenessType;
};

const TableRow = <TData extends object>({
  row,
  responsivenessType,
  viewType,
}: Props<TData>) => {
  return (
    <tr
      className={clsx(
        'border-gray-200 dark:border-gray-600',
        row.getCanSelect() &&
          row.getIsSelected() &&
          'bg-gray-100 dark:bg-gray-600',
        responsivenessType &&
          !viewType &&
          RESPONSIVE_TABLE_ROW_CLASSNAMES[responsivenessType],
        viewType && TABLE_ROW_CLASSNAMES[viewType],
      )}
    >
      {row.getVisibleCells().map((cell, idx: number) => (
        <td
          key={cell.id}
          data-label={cell.column.columnDef.header}
          className={clsx(
            'px-3.5 py-2 min-w-48 text-wrap border-gray-300 dark:border-gray-600',
            responsivenessType &&
              !viewType &&
              RESPONSIVE_TABLE_DESCRIPTION_CLASSNAMES[responsivenessType],
            viewType && TABLE_DESCRIPTION_CLASSNAMES[viewType],
          )}
        >
          {idx === 0 && row.getCanSelect() && (
            <input
              type="checkbox"
              className={clsx(
                responsivenessType &&
                  !viewType &&
                  RESPONSIVE_TABLE_ROW_CHECKBOX_CLASSNAMES[responsivenessType],
                viewType && TABLE_ROW_CHECKBOX_CLASSNAMES[viewType],
              )}
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          )}
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;

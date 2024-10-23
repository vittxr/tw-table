import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { ResponsivenessType } from '../../components/types';
import clsx from 'clsx';
import {
  MOBILE_TABLE_DESCRIPTION_CLASSNAMES,
  MOBILE_TABLE_ROW_CLASSNAMES,
} from '../tw_classnames';

type Props<TData> = {
  row: Row<TData>;
  responsivenessType?: ResponsivenessType;
};

const TableRow = <TData extends object>({
  row,
  responsivenessType,
}: Props<TData>) => {
  return (
    <tr
      className={clsx(
        'border-gray-200 dark:border-gray-600',
        row.getCanSelect() && row.getIsSelected() && 'bg-gray-100 dark:bg-gray-600',
        responsivenessType && MOBILE_TABLE_ROW_CLASSNAMES[responsivenessType],
      )}
    >
      {row.getVisibleCells().map((cell, idx: number) => (
        <td
          key={cell.id}
          data-label={cell.column.columnDef.header}
          className={clsx(
            'px-3.5 py-2 min-w-48 text-wrap border-gray-300 dark:border-gray-600',
            responsivenessType &&
              MOBILE_TABLE_DESCRIPTION_CLASSNAMES[responsivenessType],
          )}
        >
          {idx === 0 && row.getCanSelect() && (
            <input
              type="checkbox"
              className="mr-2"
              checked={row.getIsSelected()}
              // disabled={!row.getCanSelect()}
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

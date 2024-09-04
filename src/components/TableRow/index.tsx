import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { ResponsivenessType, Selection } from '../../components/types';
import clsx from 'clsx';
import { MOBILE_TABLE_DESCRIPTION_CLASSNAMES, MOBILE_TABLE_ROW_CLASSNAMES } from '../tw_classnames';

type Props<TData> = {
  row: Row<TData>;
  selection?: Selection;
  responsivenessType?: ResponsivenessType;
};

const TableRow = <TData extends object>({ row, selection, responsivenessType }: Props<TData>) => {
  console.log('row', row);
  return ( 
    <tr
      className={clsx(
        'border-gray-200',
        selection && row.getIsSelected() && 'bg-sky-100',
        responsivenessType && MOBILE_TABLE_ROW_CLASSNAMES[responsivenessType]
      )}
    >
      {row.getVisibleCells().map((cell, idx: number) => (
        <td
          key={cell.id}
          data-label={cell.column.columnDef.header}
          className={clsx("px-3.5 py-2 min-w-48 h-14 whitespace-nowrap", responsivenessType && MOBILE_TABLE_DESCRIPTION_CLASSNAMES[responsivenessType])}
        >
          {idx === 0 && selection && (
            <input
              type="checkbox"
              className="mr-2"
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
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

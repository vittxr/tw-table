import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import { Selection } from '../../components/types';
import clsx from 'clsx';

type Props<TData> = {
  row: Row<TData>;
  selection?: Selection;
};

const TableRow = <TData extends object>({ row, selection }: Props<TData>) => {
  return (
    <tr
      className={clsx(
        'border border-gray-200 hover:bg-gray-100',
        selection && row.getIsSelected() && 'bg-sky-100',
      )}
    >
      {row.getVisibleCells().map((cell, idx: number) => (
        <td
          key={cell.id}
          className="px-3.5 py-2 min-w-48 h-14 whitespace-nowrap"
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

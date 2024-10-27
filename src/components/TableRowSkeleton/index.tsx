import React from 'react';

type Props = {
  colsLength: number;
};

const TableRowSkeleton = (props: Props) => {
  return (
    <tr className="flex flex-col w-full mb-5 flex-no wrap sm:table-row sm:mb-0">
      {Array.from(Array(props.colsLength).keys()).map((_, idx) => (
        <td
          key={idx}
          className="h-[40px] px-1 py-2 whitespace-nowrap text-sm text-gray-900 border-y border-slate-200 text-center"
        >
           <p className={'h-2.5 bg-gray-200 rounded-full w-5/6 animate-pulse'} />
        </td>
      ))}
    </tr>
  );
};

export default TableRowSkeleton;
import { Table } from '@tanstack/react-table';
import React from 'react';
import PageControls from './fragments/PageControls';
import PageSizeControls from './fragments/PageSizeControls';
import Info from './fragments/Info';

type Props = {
  table: Table<any>;
};

const Pagination = ({ table }: Props) => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <PageControls table={table} />
        </div>

        <PageSizeControls table={table} />
      </div>

      <Info table={table} />
    </div>
  );
};

export default Pagination;

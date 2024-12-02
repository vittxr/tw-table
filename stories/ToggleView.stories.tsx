import React from 'react';
import { Meta } from '@storybook/react';
import { TwTable } from '../src';
import { ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { users } from './mocks/users';
import { ResponsivenessType } from '../src/components/types';

type User = {
  user_id: number;
  username: string;
  full_name: string;
  birthdate: string;
  location: string;
  followers_count: number;
  status: string;
  last_login: string;
};

const columns: ColumnDef<User>[] = [
  {
    header: 'User ID',
    accessorKey: 'user_id',
  },
  {
    header: 'Usernameeeeeeeeeeeeeeeeeeeeee', // big cols name to check if it breaks.
    accessorKey: 'username',
  },
  {
    header: 'Full Nameeeeeeeeeeeeeeeeeeeee',
    accessorKey: 'full_name',
  },
  {
    header: 'Birthdate',
    accessorKey: 'birthdate',
  },
  {
    header: 'Location',
    accessorKey: 'location',
  },
  {
    header: 'Followers Count',
    accessorKey: 'followers_count',
    enableColumnFilter: false,
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Last Login',
    accessorKey: 'last_login',
  },
];

export default {
  title: 'Components/ToggleView',
  component: TwTable,
  argTypes: {
    columns: {
      control: {
        type: 'object',
      },
    },
    data: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

export const TableStory = () => {
  const [view, setView] = React.useState<ResponsivenessType>();
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  return (
    <div className="relative min-h-screen">
      <div>
        <label>View type</label>
        <select onChange={(e) => setView(e.target.value as ResponsivenessType)}>
          <option value="">None</option>
          <option value="card">Card</option>
          <option value="scroll">Scroll</option>
        </select>
      </div>

      <TwTable
        columns={columns}
        data={users}
        viewType={view}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Table } from '../src';
import { ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { users } from './mocks/users';

type User = {
  user_id: number;
  username: string;
  full_name: string;
  birthdate: string;
  location: string;
  bio: string;
  followers_count: number;
  profile_pic: string;
  status: string;
  last_login: string;
};

const columns: ColumnDef<User>[] = [
  {
    header: 'User ID',
    accessorKey: 'user_id',
  },
  {
    header: 'Username',
    accessorKey: 'username',
  },
  {
    header: 'Full Name',
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
    header: 'Bio',
    accessorKey: 'bio',
    enableSorting: false,
  },
  {
    header: 'Followers Count',
    accessorKey: 'followers_count',
    enableColumnFilter: false,
  },
  {
    header: 'Profile Picture',
    accessorKey: 'profile_pic',
    cell: ({ getValue }) => <img src={getValue() as string} alt="Profile" />,
    enableSorting: false,
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
  title: 'Components/RowSelectionTable',
  component: Table,
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
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <div className="relative min-h-screen">
      {Object.keys(rowSelection).length > 0 && (
        <div className="fixed z-[9999] w-fit bottom-2 left-0 right-0 mx-auto bg-gray-100 text-white p-1 shadow-lg flex items-center space-x-2 rounded-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
            Update
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">
            Delete
          </button>
        </div>
      )}
      <Table
        columns={columns}
        data={users}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        enableMultiRowSelection={true} // default is true.
      />
    </div>
  );
};

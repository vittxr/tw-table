import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { TwTable } from '../src';
import { ColumnDef, VisibilityState } from '@tanstack/react-table';
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
    id: 'user_id',
    header: 'User ID',
    accessorKey: 'user_id',
  },
  {
    id: 'username',
    header: 'Username',
    accessorKey: 'username',
  },
  {
    id: 'full_name',
    header: 'Full Name',
    accessorKey: 'full_name',
  },
  {
    id: 'birthdate',
    header: 'Birthdate',
    accessorKey: 'birthdate',
  },
  {
    id: 'location',
    header: 'Location',
    accessorKey: 'location',
  },
  {
    id: 'bio',
    header: 'Bio',
    accessorKey: 'bio',
    enableSorting: false,
  },
  {
    id: 'followers_count',
    header: 'Followers Count',
    accessorKey: 'followers_count',
    enableColumnFilter: false,
  },
  {
    id: 'profile_pic',
    header: 'Profile Picture',
    accessorKey: 'profile_pic',
    cell: ({ getValue }) => <img src={getValue() as string} alt="Profile" />,
    enableSorting: false,
  },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
  },
  {
    id: 'last_login',
    header: 'Last Login',
    accessorKey: 'last_login',
  },
];

export default {
  title: 'Components/ControlColumnsVisibility',
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
  const initialColumnVisibility = columns.reduce((acc, column) => {
    acc[column.id as string] = true;
    return acc;
  }, {});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    initialColumnVisibility,
  );

  const handleToggleColumn = (columnId: string) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  return (
    <div className="relative min-h-screen">
      <div className="mb-4 flex flex-wrap gap-2">
        {columns.map((column) => (
          <div key={column.id as string} className="space-x-2">
            <input
              id={column.id as string}
              onClick={() => handleToggleColumn(column.id as string)}
              className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              checked={columnVisibility[column.id as string]}
              type="checkbox"
            ></input>
            <label htmlFor={column.id}>{column.header?.toString()}</label>
          </div>
        ))}
      </div>
      <TwTable
        columns={columns}
        data={users}
        columnVisibility={columnVisibility}
      />
    </div>
  );
};

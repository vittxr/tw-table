import React from 'react';
import { Meta } from '@storybook/react';
import { TwTable } from '../src';
import { ColumnDef } from '@tanstack/react-table';
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
  title: 'Components/CustomLabelsTable',
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
  return (
    <div className="relative min-h-screen">
      <TwTable
        columns={columns}
        data={users}
        texts={{
          empty: 'Vazio',
          sort: {
            by: 'Ordenar por',
            dir: 'Ordem',
            asc: 'Crescente',
            desc: 'Decrescente',
          },
          search: {
            label: 'Buscar',
            placeholder: 'Buscar...',
          },
          pagination: {
            previous: 'Anterior',
            next: 'Próximo',
            page: 'Página',
            of: 'de',
            show: 'Mostrar',
            showing: 'Mostrando',
            rows: 'Registros',
          },
        }}
      />
    </div>
  );
};

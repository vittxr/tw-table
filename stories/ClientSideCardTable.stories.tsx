import React from 'react';
import { Meta } from '@storybook/react';
import { TwTable, TwTableProps } from '../src';
import { ColumnDef } from '@tanstack/react-table';

type User = {
  name: string;
  age: number;
  email: string;
  phone: string;
};

const data = [
  {
    name: 'John',
    age: 15,
    email: 'john@example.com',
    phone: '123',
  },
  {
    name: 'Luke',
    age: 12,
    email: 'luke@example.com',
    phone: '456',
  },
  {
    name: 'Vitor',
    age: 20,
    email: 'vitor@example.com',
    phone: '66',
  },
];

const columns: ColumnDef<User>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Phone',
    accessorKey: 'phone',
  },
];

export default {
  title: 'Components/ClientSideTableResponsive',
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

export const TableStory = (args: TwTableProps<User>) => <TwTable {...args} />;

TableStory.args = {
  columns,
  data: data,
};

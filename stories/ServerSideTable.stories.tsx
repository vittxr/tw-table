import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { Table } from '../src';
import { ColumnDef } from '@tanstack/react-table';

// docs: https://gutendex.com
const API_ENDPOINT = 'https://gutendex.com/book';
const PAGE_SIZE = 10;

async function getData() {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  return data;
}

type Person = {
  name: string;
  birth_year: number | null;
  death_year: number | null;
};

type Format = {
  [key: string]: string;
};

type Book = {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
};

const columns: ColumnDef<Book>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Subjects',
    accessorKey: 'subjects',
    cell: ({ row }) => row.original.subjects.join(', '), // Display array of subjects
  },
  {
    header: 'Authors',
    accessorKey: 'authors',
    cell: ({ row }) =>
      row.original.authors.map((author) => author.name).join(', '), // Display array of author names
  },
  {
    header: 'Download Count',
    accessorKey: 'download_count',
  },
];

export default {
  title: 'Components/ServerSideTable',
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
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  console.log('data', data);
  return (
    <Table
      columns={columns}
      data={data?.results}
      serverSide={true}
      pagination={{
        pageIndex: 1,
        pageSize: PAGE_SIZE,
        totalRows: data?.count / PAGE_SIZE,
        onPrevious: () => {},
        onNext: () => {},
        onLimitChange: () => {},
        onSearch: (col: keyof Book, value: string) => {},
        onSort: (col: keyof Book, direction: 'asc' | 'desc') => {},
      }}
    />
  );
};

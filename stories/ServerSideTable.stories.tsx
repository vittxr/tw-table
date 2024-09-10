import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { Table } from '../src';
import { ColumnDef, PaginationState } from '@tanstack/react-table';

const API_ENDPOINT = 'https://gutendex.com/books?';
const PAGE_SIZE = 32;

async function getData({ page = 1 }: { page: number }): Promise<any> {
  const response = await fetch(
    API_ENDPOINT + new URLSearchParams({ page: page.toString() }),
  );
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
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Subjects',
    accessorKey: 'subjects',
    cell: ({ row }) => row.original.subjects.join(', '), // Display array of subjects
    enableSorting: false,
  },
  {
    header: 'Authors',
    accessorKey: 'authors',
    cell: ({ row }) =>
      row.original.authors.map((author) => author.name).join(', '), // Display array of author names
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Download Count',
    accessorKey: 'download_count',
    enableSorting: false,
    enableColumnFilter: false,
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
  const [data, setData] = useState({ results: [], count: 0 });
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    getData({ page: pagination.pageIndex + 1 }).then((data) => {
      setData(data);
    });
  }, [pagination]);

  console.log('pagination', pagination);
  return (
    <Table
      columns={columns}
      data={data?.results}
      serverSide={true}
      pagination={pagination}
      setPagination={setPagination}
      rowCount={data?.count}
    />
  );
};

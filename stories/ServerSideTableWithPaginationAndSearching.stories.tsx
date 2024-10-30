import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { TwTable } from '../src';
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table';

const API_ENDPOINT = 'https://gutendex.com/books?';
const PAGE_SIZE = 32;

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

async function getData({
  page = 1,
  search = '',
}: {
  page?: number;
  search?: string;
}): Promise<any> {
  const searchParams = new URLSearchParams({
    page: page.toString(),
    search: search,
  });
  const response = await fetch(API_ENDPOINT + searchParams);
  const data = await response.json();
  return data;
}

const columns: ColumnDef<Book>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
    enableSorting: false,
  },
  {
    header: 'Subjects',
    accessorKey: 'subjects',
    cell: ({ row }) => row.original.subjects.join(', '),
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Authors',
    accessorKey: 'authors',
    cell: ({ row }) =>
      row.original.authors.map((author) => author.name).join(', '),
    enableSorting: false,
  },
  {
    header: 'Download Count',
    accessorKey: 'download_count',
    enableSorting: false,
    enableColumnFilter: false,
  },
];

export default {
  title: 'Components/ServerSideTableWithPaginationAndSearching',
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
  const [data, setData] = useState({ results: [], count: 0 });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    getData({ page: pagination.pageIndex + 1 }).then((data) => {
      setData(data);
    });
  }, [pagination]);

  useEffect(() => {
    const search = `${columnFilters.find((filter) => filter.id === 'title')?.value}`;
    getData({ search: search }).then((data) => {
      setData(data);
    });
  }, [columnFilters]);

  return (
    <TwTable
      columns={columns}
      data={data?.results}
      serverSide={true}
      pagination={pagination}
      setPagination={setPagination}
      rowCount={data?.count}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
    />
  );
};

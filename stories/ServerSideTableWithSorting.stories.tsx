import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { TwTable } from '../src';
import {
  ColumnDef,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';

// docs: https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch
const API_ENDPOINT = 'https://api.jikan.moe/v4/anime';
const PAGE_SIZE = 25;

type Anime = {
  title: string;
  type: string;
  source: string;
  episodes: number;
};

async function getData({
  sorting = [],
}: {
  sorting?: SortingState;
}): Promise<any> {
  const searchParams = new URLSearchParams({
    sort: sorting.map((sort) => `${sort.desc ? 'desc' : 'asc'}`).join(','),
    order_by: sorting.map((sort) => sort.id).join(','),
  });
  console.log(searchParams.toString());
  const response = await fetch(API_ENDPOINT + '?' + searchParams);
  const data = await response.json();
  return data;
}

const columns: ColumnDef<Anime>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    header: 'Type',
    accessorKey: 'type',
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Source',
    accessorKey: 'source',
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Episodes',
    accessorKey: 'episodes',
    enableSorting: true,
    enableColumnFilter: false,
  },
];

export default {
  title: 'Components/ServerSideTableWithSorting',
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
  const [data, setData] = useState({ data: [] });
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'title',
      desc: true,
    },
  ]);

  useEffect(() => {
    getData({ sorting }).then((data) => {
      setData(data);
    });
  }, [sorting]);

  console.log('data', data);
  return (
    <TwTable
      columns={columns}
      data={data?.data}
      serverSide={true}
      sorting={sorting}
      setSorting={setSorting}
    />
  );
};

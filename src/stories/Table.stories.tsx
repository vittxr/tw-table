import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "@/Table";
import { ColumnDef } from "@tanstack/react-table";

type DataType = {
  id: number;
  name: string;
  age: number;
};

const columns: ColumnDef<DataType>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
];

const data: DataType[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Alice Johnson", age: 22 },
];

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    // Add any props you want to control in Storybook
  },
} as Meta;

const Template: StoryFn = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
  title: "User Table",
  columnFilters: [],
  setColumnFilters: () => {},
  search: {
    state: {},
    setState: () => {},
  },
  sort: {
    state: [],
    setState: () => {},
  },
  pagination: {
    currentPage: 1,
    rowsCount: 10,
    pageRange: 5,
    onPageChange: () => {},
  },
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
  data: [],
};

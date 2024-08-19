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
  { id: 4, name: "Michael Brown", age: 28 },
  { id: 5, name: "Emily Davis", age: 27 },
  { id: 6, name: "Chris Wilson", age: 32 },
  { id: 7, name: "Olivia Martinez", age: 24 },
  { id: 8, name: "Daniel Garcia", age: 31 },
  { id: 9, name: "Sophia Robinson", age: 29 },
  { id: 10, name: "James Clark", age: 26 },
  { id: 11, name: "Isabella Walker", age: 23 },
  { id: 12, name: "Benjamin Hall", age: 33 },
  { id: 13, name: "Ava King", age: 21 },
  { id: 14, name: "Lucas Wright", age: 30 },
  { id: 15, name: "Mia Lewis", age: 28 },
];


export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    // Add any props you want to control in Storybook
  },
} as Meta;

const Template: StoryFn = (args) => <Table {...args} />;

export const ClientSideTable = Template.bind({});
ClientSideTable.args = {
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

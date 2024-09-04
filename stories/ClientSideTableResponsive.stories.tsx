import React from "react";
import { Meta } from "@storybook/react";
import { Table, TableProps } from "../src/";
import { ColumnDef } from "@tanstack/react-table";

type User = {
    name: string;
    age: number;
    email: string;
    phone: string;
};

const data = [
    {
        "name": "John",
        "age": 25,
        "email": "john@example.com",
        "phone": "1234567890"
    },
    {
        "name": "Luke",
        "age": 25,
        "email": "luke@example.com",
        "phone": "1234567890"
    },
    {
        "name": "Vitor",
        "age": 25,
        "email": "vitor@example.com",
        "phone": "1234567890"
    },
]

const columns: ColumnDef<User>[] = [
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Age",
        accessorKey: "age",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Phone",
        accessorKey: "phone",
    },
];

export default {
  title: "Components/ClietSideTableResponsive",
  component: Table,
  argTypes: {
    columns: {
      control: {
        type: "object",
      },
    },
    data: {
      control: {
        type: "object",
      },
    },
  },
} as Meta;

export const TableStory = (args: TableProps<User>) => <Table {...args} />;

TableStory.args = {
  columns,
  data: data,
};

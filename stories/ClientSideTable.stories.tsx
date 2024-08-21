import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "@/Table";
import { ColumnDef } from "@tanstack/react-table";
import { mock } from './mock'

type DataType = {
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

const columns: ColumnDef<DataType>[] = [
  {
    header: "User ID",
    accessorKey: "user_id",
  },
  {
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Full Name",
    accessorKey: "full_name",
  },
  {
    header: "Birthdate",
    accessorKey: "birthdate",
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Bio",
    accessorKey: "bio",
    enableSorting: false, // Assuming you don't want to enable sorting on the bio
  },
  {
    header: "Followers Count",
    accessorKey: "followers_count",
    enableColumnFilter: false, // Disabling the column filter for followers count
  },
  {
    header: "Profile Picture",
    accessorKey: "profile_pic",
    cell: ({ getValue }) => <img src={getValue() as string} alt="Profile" />, // Custom rendering for the image
    enableSorting: false, // Disabling sorting for profile pictures
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Last Login",
    accessorKey: "last_login",
  },
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
  data: mock,
};

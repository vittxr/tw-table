import React from "react";
import { Meta, StoryObj  } from "@storybook/react";
import Table from "./Table";

export default {
    component: Table,  
    title: "Table",
}

const Template: Story<{ columns: string[] }> = (args) => <Table columns={args.columns} />;


export const Default = Template.bind({});
Default.args = {
    columns: ["Column 1", "Column 2", "Column 3"],
};
import React from "react";
import { Story as StoryType } from "@storybook/react";
import {Cell, CellProps} from ".";

const Story = {
  title: "Cell",
  component: Cell,
  argTypes: {
    cell: {
      isChecked: true,
      serialNumber: 3,
      id: 3
    },
  }
};

const Template: StoryType<CellProps> = (args) => <Cell {...args} />;

export const CheckedCell = Template.bind({});
CheckedCell.args = {
  cell: {isChecked: true, serialNumber: 3, id: 3}
};

export const UnCheckedCell = Template.bind({});
UnCheckedCell.args = {
  cell: {isChecked: false, serialNumber: 3, id: 3}
};

export default Story;
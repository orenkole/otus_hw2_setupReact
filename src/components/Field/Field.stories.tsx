import React from "react";
import { Story as StoryType } from "@storybook/react";
import {Field, FieldProps} from ".";

const Story = {
  title: "Field",
  component: Field,
  argTypes: {
    sizes: {width: 4, height: 2},
    cells: Array.from({ length: 8 }, (_, i) => ({
      isChecked: false,
      serialNumber: (i+1),
      id: i,
    }))
  }
};

const Template: StoryType<FieldProps> = (args) => <Field {...args} />;

export const EmptyField = Template.bind({});
EmptyField.args = {
  sizes: {width: 4, height: 2},
  cells: Array.from({ length: 8 }, (_, i) => ({
    isChecked: false,
    serialNumber: (i+1),
    id: i,
  }))
};

export default Story;
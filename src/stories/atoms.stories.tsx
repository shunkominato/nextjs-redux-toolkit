//components/atoms/atoms.stories.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/atoms/Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "atoms",
  component: Button,
  decorators: [withKnobs],
};

const Template: Story<ButtonProps> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "ddd",
  onClick: () => console.log("f"),
};

export const secoundary = Template.bind({});
secoundary.args = {
  text: "sdfsd",
  onClick: () => console.log("f"),
};

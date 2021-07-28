import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as ButtonComponent } from "@forms/Button/Button";

export default {
  title: "Forms/Button",
  component: ButtonComponent,
  argTypes: {
    variant: {
      name: "Variant",
      defaultValue: "blue",
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const ButtonStory: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Button = ButtonStory.bind({});

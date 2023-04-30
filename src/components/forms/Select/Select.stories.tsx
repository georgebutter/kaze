import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select as SelectComponent} from '@forms/Select/Select';

export default {
  title: 'Forms/Select',
  component: SelectComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'blue',
    },
  },
} as ComponentMeta<typeof SelectComponent>;

const SelectStory: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args}>Select</SelectComponent>
);

export const Select = SelectStory.bind({});

Select.args = {
  options: [
    {
      label: 'Option 1',
      value: 'option-1',
    },
    {
      label: 'Option 2',
      value: 'option-2',
    },
    {
      label: 'Option 3',
      value: 'option-3',
    },
  ],
};

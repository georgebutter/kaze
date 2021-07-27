import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Heading as HeadingComponent} from '@typography/Heading/Heading';

export default {
  title: 'Typography/Heading',
  component: HeadingComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'red'
    },
    size: {
      name: 'Size',
      defaultValue: 'h2'
    }
  },
} as ComponentMeta<typeof HeadingComponent>;


const HeadingStory: ComponentStory<typeof HeadingComponent> = (args) => (
  <HeadingComponent {...args}>
    {`Heading variant: ${args.variant}, size: ${args.size}`}
  </HeadingComponent>
);

export const Heading = HeadingStory.bind({});
Heading.args = {
  variant: 'red',
  size: 'h2',
  className: 'text-center'
};

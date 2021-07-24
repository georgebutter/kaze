import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Box as BoxComponent} from './Box';

export default {
  title: 'Layouts/Box',
  component: BoxComponent,
  argTypes: {
    padding: {
      name: 'Padding',
      description:
        'The amount of padding around the element',
      defaultValue: 2,
    },
  },
} as ComponentMeta<typeof BoxComponent>;


const BoxStory: ComponentStory<typeof BoxComponent> = (args) => (
  <BoxComponent {...args} />
);

export const Box = BoxStory.bind({});
Box.args = {
  children: (<p>{`
Returns a Box component which, by the design philosophy should always
have equal padding. If it doesn't then it shouldn't be a box. Additionally a Box
should never have a set width or height, this should always been defined
either by the context that it's within, or what is within the box.
`}</p>),
};

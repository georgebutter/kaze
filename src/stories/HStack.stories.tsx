import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HStack as HStackComponent} from '../layouts/HStack';
import {Box} from '../layouts/Box';

export default {
  title: 'Layouts/HStack',
  component: HStackComponent,
  argTypes: {
    space: {
      name: 'Space',
      description:
        'The amount of vertical spacing between elements in the stack.',
      defaultValue: 2,
    },
  },
} as ComponentMeta<typeof HStackComponent>;


const HStackStory: ComponentStory<typeof HStackComponent> = (args) => (
  <HStackComponent {...args} />
);

export const HStack = HStackStory.bind({});
HStack.args = {
  children: (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <Box key={i} padding={2}>
          {`Box ${i}`}
        </Box>
      ))}
    </>
  ),
};

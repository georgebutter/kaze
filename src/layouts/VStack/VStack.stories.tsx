import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {VStack as VStackComponent} from '../VStack/VStack';
import {Box} from '../Box/Box';

export default {
  title: 'Layouts/VStack',
  component: VStackComponent,
  argTypes: {
    space: {
      name: 'Space',
      description:
        'The amount of vertical spacing between elements in the stack.',
      defaultValue: 2,
    },
  },
} as ComponentMeta<typeof VStackComponent>;


const VStackStory: ComponentStory<typeof VStackComponent> = (args) => (
  <VStackComponent {...args} />
);

export const VStack = VStackStory.bind({});
VStack.args = {
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

import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Center as CenterComponent} from '@layouts/Center/Center';
import {VStack} from '@layouts/VStack/VStack';
import {Box} from '@layouts/Box/Box';

export default {
  title: 'Layouts/Center',
  component: CenterComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    },
    width: {
      name: 'Max width',
      description:
        'The maximum width of the center element as based upon your tailwind config',
      defaultValue: 'sm',
    },
  },
} as ComponentMeta<typeof CenterComponent>;


const CenterStory: ComponentStory<typeof CenterComponent> = (args) => (
  <CenterComponent {...args} />
);

export const Center = CenterStory.bind({});
Center.args = {
  children: (
    <VStack space={2}>
      {[1, 2, 3, 4].map((i) => (
        <Box padding={2} key={i}>
          <p>{`
Center can be used to center content, you can apply a max width based upon the values you have setup in your tailwind config.
          `}</p>
        </Box>
      ))}
    </VStack>
  ),
};

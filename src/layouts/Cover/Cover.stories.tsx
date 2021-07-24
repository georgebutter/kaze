import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Cover as CoverComponent} from './Cover';
import {Box} from '../Box/Box';

export default {
  title: 'Layouts/Cover',
  component: CoverComponent,
  argTypes: {
  },
} as ComponentMeta<typeof CoverComponent>;


const CoverStory: ComponentStory<typeof CoverComponent> = (args) => (
  <CoverComponent {...args} />
);

const arr = [1, 2, 3];

export const Cover = CoverStory.bind({});
Cover.args = {
  children: (
    <>
      {arr.map((width, i) => (
        <Box padding={2} key={i}>
          <p className={`text-center`}>
            {i}
          </p>
        </Box>
      ))}
    </>
  ),
};

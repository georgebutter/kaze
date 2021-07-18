import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Cover as CoverComponent} from '../layouts/Cover';

export default {
  title: 'Layouts/Cover',
  component: CoverComponent,
  argTypes: {
  },
} as ComponentMeta<typeof CoverComponent>;


const CoverStory: ComponentStory<typeof CoverComponent> = (args) => (
  <CoverComponent {...args} />
);

export const Cover = CoverStory.bind({});


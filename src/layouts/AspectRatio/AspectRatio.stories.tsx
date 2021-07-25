import * as React from 'react';
import image from '../../stories/assets/windmills.jpg';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AspectRatio as AspectRatioComponent} from './AspectRatio';
import {Center} from '../Center/Center';

export default {
  title: 'Layouts/AspectRatio',
  component: AspectRatioComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'blue'
    }
  },
} as ComponentMeta<typeof AspectRatioComponent>;


const AspectRatioStory: ComponentStory<
  typeof AspectRatioComponent
> = (args) => (
  <Center width="sm">
    <AspectRatioComponent {...args}>
      <img src={image} className="opacity-50" />
    </AspectRatioComponent>
  </Center>
);

export const AspectRatio = AspectRatioStory.bind({});
AspectRatio.args = {
};

import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Reel as ReelComponent} from '@layouts/Reel/Reel';
import {AspectRatio} from '@layouts/AspectRatio/AspectRatio';

export default {
  title: 'Layouts/Reel',
  component: ReelComponent,
  argTypes: {
    space: {
      name: 'Space',
      description:
        'The amount of vertical spacing between elements in the stack.',
      defaultValue: 2,
    },
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    }
  },
} as ComponentMeta<typeof ReelComponent>;


const ReelStory: ComponentStory<typeof ReelComponent> = (args) => (
  <ReelComponent {...args} />
);

export const Reel = ReelStory.bind({});
Reel.args = {
  children: (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <AspectRatio className="w-64">
            <div className="flex items-center justify-center">
              <p>{`Item ${i}`}</p>
            </div>
          </AspectRatio>
        </div>
      ))}
    </>
  ),
};

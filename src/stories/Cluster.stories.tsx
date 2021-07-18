import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Cluster as ClusterComponent} from '../layouts/Cluster';
import {Box} from '../layouts/Box';

export default {
  title: 'Layouts/Cluster',
  component: ClusterComponent,
  argTypes: {
  },
} as ComponentMeta<typeof ClusterComponent>;


const ClusterStory: ComponentStory<typeof ClusterComponent> = (args) => (
  <ClusterComponent {...args} />
);

const arr = [2, 6, 4, 8, 2, 10, 1, 5, 2, 7, 4, 3];

export const Cluster = ClusterStory.bind({});
Cluster.args = {
  children: (
    <>
      {arr.map((width, i) => (
        <Box padding={2} key={i}>
          <p className={`w-${width * 4} text-center`}>{i}</p>
        </Box>
      ))}
    </>
  ),
};

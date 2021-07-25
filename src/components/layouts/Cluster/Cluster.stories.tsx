import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Cluster as ClusterComponent} from '@layouts/Cluster/Cluster';
import {Box} from '@layouts/Box/Box';

export default {
  title: 'Layouts/Cluster',
  component: ClusterComponent,
  argTypes: {
    gap: {
      name: 'Gap',
      description:
        'The amount of spacing between elements in the cluster.',
      defaultValue: 2,
    },
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    }
  },
} as ComponentMeta<typeof ClusterComponent>;


const ClusterStory: ComponentStory<typeof ClusterComponent> = (args) => (
  <ClusterComponent {...args} />
);

const arr = [
  'Lorem ipsum dolor sit amet.',
  'Bibendum est ultricies integer quis auctor.',
  'Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.',
  'Fames ac turpis egestas maecenas pharetra.',
  'Odio ut sem nulla pharetra diam sit amet nisl suscipit.',
  'Commodo quis imperdiet massa tincidunt nunc.',
  'Massa placerat duis ultricies lacus sed turpis tincidunt.',
  'Id diam maecenas ultricies mi eget.',
  'Proin nibh nisl condimentum id. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.',
  'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.',
];

export const Cluster = ClusterStory.bind({});
Cluster.args = {
  children: (
    <>
      {arr.map((content, i) => (
        <Box padding={2} key={i}>
          <p>
            {content}
          </p>
        </Box>
      ))}
    </>
  ),
};

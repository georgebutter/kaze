import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Sidebar as SidebarComponent} from '@layouts/Sidebar/Sidebar';
import {SidebarSide} from '@layouts/Sidebar/SidebarSide';
import {SidebarMain} from '@layouts/Sidebar/SidebarMain';

export default {
  title: 'Layouts',
  component: SidebarComponent,
  argTypes: {
    gap: {
      name: 'Gap',
      description:
        'The amount of spacing between the sidebar and the main content.',
      defaultValue: 2,
    },
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    }
  },
} as ComponentMeta<typeof SidebarComponent>;


const SidebarStory: ComponentStory<typeof SidebarComponent> = (args) => (
  <SidebarComponent {...args}>
    <SidebarSide variant="red">
      <h3 className="font-semibold">Sidebar Side</h3>
      <p>This is the sidebar side.</p>
    </SidebarSide>
    <SidebarMain minWidth="3/4" variant="green">
      <h3 className="font-semibold">Sidebar Main</h3>
      <p>This is the sidebar main.</p>
    </SidebarMain>
  </SidebarComponent>
);

export const Sidebar = SidebarStory.bind({});
Sidebar.args = {
};

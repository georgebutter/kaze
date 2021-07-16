import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Sidebar as SidebarComponent} from '../layouts/Sidebar/Sidebar';
import {SidebarSide} from '../layouts/Sidebar/SidebarSide';
import {SidebarMain} from '../layouts/Sidebar/SidebarMain';

export default {
  title: 'Layouts',
  component: SidebarComponent,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarComponent>;


const SidebarStory: ComponentStory<typeof SidebarComponent> = (args) => (
  <SidebarStory {...args}>
    <SidebarSide className="px-2 bg-red-300">
      <h3 className="font-semibold">Sidebar Side</h3>
      <p>This is the sidebar side.</p>
    </SidebarSide>
    <SidebarMain className="px-2 bg-purple-300" minWidth="3/4">
      <h3 className="font-semibold">Sidebar Main</h3>
      <p>This is the sidebar main.</p>
    </SidebarMain>
  </SidebarStory>
);

export const Sidebar = SidebarStory.bind({});
Sidebar.args = {
};

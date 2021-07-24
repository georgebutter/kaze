import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Sidebar as SidebarComponent} from './Sidebar';
import {SidebarSide} from './SidebarSide';
import {SidebarMain} from './SidebarMain';

export default {
  title: 'Layouts',
  component: SidebarComponent,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarComponent>;


const SidebarStory: ComponentStory<typeof SidebarComponent> = (args) => (
  <SidebarComponent {...args}>
    <SidebarSide>
      <h3 className="font-semibold">Sidebar Side</h3>
      <p>This is the sidebar side.</p>
    </SidebarSide>
    <SidebarMain minWidth="3/4">
      <h3 className="font-semibold">Sidebar Main</h3>
      <p>This is the sidebar main.</p>
    </SidebarMain>
  </SidebarComponent>
);

export const Sidebar = SidebarStory.bind({});
Sidebar.args = {
};

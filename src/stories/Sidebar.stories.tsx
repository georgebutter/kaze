import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Sidebar as SidebarInner} from '../layouts/Sidebar/Sidebar';
import {SidebarMain} from '../layouts/Sidebar/SidebarMain';
import {SidebarContainer} from '../layouts/Sidebar/SidebarContainer';

export default {
  title: 'Layouts',
  component: SidebarContainer,
  argTypes: {
  },
} as ComponentMeta<typeof SidebarContainer>;


const SidebarStory: ComponentStory<typeof SidebarContainer> = (args) => (
  <SidebarContainer {...args}>
    <SidebarInner className="px-2 bg-red-300">
      <h3 className="font-semibold">Sidebar</h3>
      <p>This is the sidebar.</p>
    </SidebarInner>
    <SidebarMain className="px-2 bg-purple-300" minWidth="3/4">
      <h3 className="font-semibold">Main</h3>
      <p>This is the main content.</p>
    </SidebarMain>
  </SidebarContainer>
);

export const Sidebar = SidebarStory.bind({});
Sidebar.args = {
};

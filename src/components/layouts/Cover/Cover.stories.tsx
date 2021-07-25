import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Cover as CoverComponent} from '@layouts/Cover/Cover';
import {Box} from '@layouts/Box/Box';

export default {
  title: 'Layouts/Cover',
  component: CoverComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    }
  },
} as ComponentMeta<typeof CoverComponent>;


const CoverStory: ComponentStory<typeof CoverComponent> = (args) => (
  <CoverComponent {...args} />
);

const arr = ["Header", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Quam adipiscing vitae proin sagittis. Vel risus commodo viverra maecenas accumsan. Molestie nunc non blandit massa enim nec dui nunc mattis. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Dignissim sodales ut eu sem integer vitae justo eget magna. Id faucibus nisl tincidunt eget nullam non nisi est sit. Sed risus ultricies tristique nulla aliquet enim tortor at. Curabitur gravida arcu ac tortor dignissim convallis. In nibh mauris cursus mattis molestie a iaculis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Semper feugiat nibh sed pulvinar proin gravida. Feugiat in ante metus dictum at tempor commodo ullamcorper. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vel orci porta non pulvinar neque laoreet. Ultrices gravida dictum fusce ut placerat. Vitae turpis massa sed elementum tempus egestas sed sed.", "Footer"];

export const Cover = CoverStory.bind({});
Cover.args = {
  children: (
    <>
      {arr.map((content, i) => (
        <Box padding={2} key={content}>
          <p className={`text-center`}>
            {content}
          </p>
        </Box>
      ))}
    </>
  ),
};

import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Text as TextComponent} from '@typography/Text/Text';

export default {
  title: 'Typography/Text',
  component: TextComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'black'
    },
  },
} as ComponentMeta<typeof TextComponent>;


const TextStory: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args}>
    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Quam adipiscing vitae proin sagittis. Vel risus commodo viverra maecenas accumsan. Molestie nunc non blandit massa enim nec dui nunc mattis. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Dignissim sodales ut eu sem integer vitae justo eget magna. Id faucibus nisl tincidunt eget nullam non nisi est sit. Sed risus ultricies tristique nulla aliquet enim tortor at. Curabitur gravida arcu ac tortor dignissim convallis. In nibh mauris cursus mattis molestie a iaculis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Semper feugiat nibh sed pulvinar proin gravida. Feugiat in ante metus dictum at tempor commodo ullamcorper. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vel orci porta non pulvinar neque laoreet. Ultrices gravida dictum fusce ut placerat. Vitae turpis massa sed elementum tempus egestas sed sed.'}
  </TextComponent>
);

export const Text = TextStory.bind({});
Text.args = {
  variant: 'red',
};

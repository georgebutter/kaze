import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Grid as GridComponent} from '@layouts/Grid/Grid';
import {Box} from '@layouts/Box/Box';

export default {
  title: 'Layouts/Grid',
  component: GridComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      defaultValue: 'purple'
    }
  },
} as ComponentMeta<typeof GridComponent>;

const GridStory: ComponentStory<typeof GridComponent> = (args) => (
  <GridComponent {...args} />
);

export const Grid = GridStory.bind({});

const gridContent = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Quam adipiscing vitae proin sagittis. Vel risus commodo viverra maecenas accumsan. Molestie nunc non blandit massa enim nec dui nunc mattis. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Dignissim sodales ut eu sem integer vitae justo eget magna. Id faucibus nisl tincidunt eget nullam non nisi est sit. Sed risus ultricies tristique nulla aliquet enim tortor at. Curabitur gravida arcu ac tortor dignissim convallis. In nibh mauris cursus mattis molestie a iaculis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Semper feugiat nibh sed pulvinar proin gravida. Feugiat in ante metus dictum at tempor commodo ullamcorper. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Vel orci porta non pulvinar neque laoreet. Ultrices gravida dictum fusce ut placerat. Vitae turpis massa sed elementum tempus egestas sed sed.',
  'Bibendum est ultricies integer quis auctor. Pellentesque dignissim enim sit amet venenatis urna cursus. Facilisis leo vel fringilla est ullamcorper eget nulla. Sit amet purus gravida quis blandit turpis. Id ornare arcu odio ut sem nulla pharetra diam. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Elit duis tristique sollicitudin nibh sit amet commodo. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Amet consectetur adipiscing elit ut aliquam purus sit amet.',
  'Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Gravida neque convallis a cras semper auctor neque vitae tempus. Tempus egestas sed sed risus pretium. Sagittis nisl rhoncus mattis rhoncus urna. Leo vel orci porta non pulvinar neque laoreet. Eget velit aliquet sagittis id consectetur purus ut. Orci a scelerisque purus semper eget duis at. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Vivamus arcu felis bibendum ut tristique et egestas quis. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Luctus accumsan tortor posuere ac ut consequat semper viverra. Scelerisque in dictum non consectetur a erat. Nullam ac tortor vitae purus faucibus.',
  'Fames ac turpis egestas maecenas pharetra. Mus mauris vitae ultricies leo integer malesuada nunc. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. A erat nam at lectus urna. Nulla aliquet enim tortor at. Arcu felis bibendum ut tristique et egestas quis. Feugiat pretium nibh ipsum consequat nisl vel pretium. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Aliquam id diam maecenas ultricies mi eget. Molestie ac feugiat sed lectus vestibulum. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Elementum eu facilisis sed odio morbi quis commodo. Non pulvinar neque laoreet suspendisse interdum consectetur. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.',
  'Odio ut sem nulla pharetra diam sit amet nisl suscipit. Lacus suspendisse faucibus interdum posuere lorem. Congue quisque egestas diam in arcu cursus euismod quis. Ullamcorper morbi tincidunt ornare massa eget. Aliquet nibh praesent tristique magna. Amet tellus cras adipiscing enim eu turpis. Suscipit tellus mauris a diam maecenas sed enim ut. Tortor condimentum lacinia quis vel eros donec. Nunc mi ipsum faucibus vitae aliquet nec. Massa tincidunt dui ut ornare lectus sit amet est. Tristique senectus et netus et malesuada fames ac. Ultrices dui sapien eget mi proin sed. In eu mi bibendum neque egestas congue quisque egestas diam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Vitae congue mauris rhoncus aenean. Urna molestie at elementum eu facilisis sed odio morbi quis. Sed risus pretium quam vulputate dignissim suspendisse in. Augue eget arcu dictum varius duis at consectetur lorem.',
  'Commodo quis imperdiet massa tincidunt nunc. Cursus mattis molestie a iaculis at erat pellentesque. Nascetur ridiculus mus mauris vitae. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Nunc mattis enim ut tellus. Nibh venenatis cras sed felis. Egestas purus viverra accumsan in. Massa massa ultricies mi quis hendrerit dolor magna. Fames ac turpis egestas integer eget aliquet. Non consectetur a erat nam at lectus urna duis convallis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nec sagittis aliquam malesuada bibendum. Metus dictum at tempor commodo ullamcorper a. Vitae purus faucibus ornare suspendisse sed.',
  'Massa placerat duis ultricies lacus sed turpis tincidunt. Felis bibendum ut tristique et egestas quis. Malesuada fames ac turpis egestas integer. Cursus vitae congue mauris rhoncus. In iaculis nunc sed augue lacus viverra vitae congue eu. Ipsum consequat nisl vel pretium lectus quam id. Ac auctor augue mauris augue neque gravida. A scelerisque purus semper eget duis at tellus. Luctus venenatis lectus magna fringilla urna. Eleifend quam adipiscing vitae proin sagittis. Felis bibendum ut tristique et egestas quis. Tristique senectus et netus et. Dictum varius duis at consectetur lorem. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Tortor at risus viverra adipiscing. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Nec ullamcorper sit amet risus nullam. Facilisis gravida neque convallis a cras semper. Magna ac placerat vestibulum lectus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.',
  'Id diam maecenas ultricies mi eget. Scelerisque purus semper eget duis at tellus at urna. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Ut porttitor leo a diam sollicitudin tempor. Amet facilisis magna etiam tempor orci eu lobortis elementum. Elit ullamcorper dignissim cras tincidunt lobortis. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Integer quis auctor elit sed vulputate mi sit. Integer quis auctor elit sed. Duis ut diam quam nulla porttitor. Tellus pellentesque eu tincidunt tortor aliquam. Vestibulum lectus mauris ultrices eros in cursus turpis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Est placerat in egestas erat imperdiet sed euismod nisi porta. Non blandit massa enim nec. Vitae et leo duis ut. Urna cursus eget nunc scelerisque. Dignissim sodales ut eu sem integer vitae justo eget.',
  'Proin nibh nisl condimentum id. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Nisi est sit amet facilisis magna etiam tempor. Risus at ultrices mi tempus imperdiet. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Sollicitudin aliquam ultrices sagittis orci a. In ornare quam viverra orci sagittis eu volutpat. Duis convallis convallis tellus id.',
  'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Non nisi est sit amet facilisis magna etiam. Quis varius quam quisque id. Nec nam aliquam sem et tortor consequat id. Elit pellentesque habitant morbi tristique senectus et. Integer enim neque volutpat ac tincidunt. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ac orci phasellus egestas tellus. Pretium aenean pharetra magna ac. Cras semper auctor neque vitae tempus quam pellentesque nec. Libero enim sed faucibus turpis in. Id leo in vitae turpis massa sed. Gravida cum sociis natoque penatibus et. Arcu non odio euismod lacinia. Nam aliquam sem et tortor consequat id porta nibh. Mi quis hendrerit dolor magna eget est lorem. Gravida neque convallis a cras.',
];

Grid.args = {
  children: (
    <>
      {gridContent.map((i) => (
        <Box key={i} padding={2}>
          {i}
        </Box>
      ))}
    </>
  ),
};

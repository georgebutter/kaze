import React from 'react';
// Import your components here
import { Button } from '../src/components/forms/Button/Button';
import { Checkbox } from '../src/components/forms/Checkbox/Checkbox';
import { Select } from '../src/components/forms/Select/Select';
import { Box } from '../src/components/layouts/Box/Box';
import { Center } from '../src/components/layouts/Center/Center';
import { Cluster } from '../src/components/layouts/Cluster/Cluster';
import { Cover } from '../src/components/layouts/Cover/Cover';
import { Grid } from '../src/components/layouts/Grid/Grid';
import { HStack } from '../src/components/layouts/HStack/HStack';
import { Reel } from '../src/components/layouts/Reel/Reel';
import { Sidebar } from '../src/components/layouts/Sidebar/Sidebar';
import { VStack } from '../src/components/layouts/VStack/VStack';
import { Heading } from '../src/components/typography/Heading/Heading';
import { P } from '../src/components/typography/P/P';
import { Span } from '../src/components/typography/Span/Span';
import {Kaze} from '../src/components/providers/Kaze';
import theme from '../style/kaze/index.ts';

export function App() {
  console.log('Using theme:', theme);
  return (
    <Kaze theme={theme}>
      <VStack>
        <Heading level={1}>Kaze UI Component Showcase</Heading>
        <Button>Button</Button>
        <Checkbox label="Checkbox" />
        <Select options={[{ label: 'Option 1', value: '1' }]} />
        <Center variant="purple">
          <VStack space={2}>
            {[1, 2, 3, 4].map((i) => (
              <Box padding={2} key={i}>
                <P>{`Center can be used to center content, you can apply a max width based upon the values you have setup in your tailwind config.`}</P>
              </Box>
            ))}
          </VStack>
        </Center>
        <Cluster>Cluster</Cluster>
        <Cover>Cover</Cover>
        <Grid>Grid</Grid>
        <HStack>HStack</HStack>
        <Reel>Reel</Reel>
        <Sidebar>Sidebar</Sidebar>
        <VStack>VStack</VStack>
        <P>Paragraph</P>
        <Span>Span</Span>
      </VStack>
    </Kaze>
  );
}

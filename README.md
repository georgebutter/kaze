# Kaze React UI

Component library that extends your tailwind config to provide powerful responsive layouts that don't rely on media queries.

## Getting started

1. Install

```
npm i kaze-ui
```

2. Configure `tailwind.config.js`

```
const {kaze} = require('kaze-ui/config');

module.exports = kaze({
  purge: [],
  theme: {
    extend: {},
  }
  variants: {},
  plugins: [],
});
```

3. Wrap your app with the Kaze theme provider

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Kaze } from 'kaze-ui'

ReactDOM.render(
  <Kaze>
    <App />
  </Kaze>,
  document.getElementById('root')
)
```

4. (Optional) Extend the styles of the components.

Here is an example `styles` directory. In this example we will style the `Box` component

```
styles/
┣ components/
┃ ┗ Box.ts
┗ index.ts
```

Export the Box component from `styles/index.ts`

```
import Box from './components/Box';

export default {
  components: {
    Box,
  },
};
```

Add a theme to the `Box` component

```
export default {
  base: 'rounded', // Add a border radius to all of the `Box` components
  // Create variants for the `Box` component
  variants: {
    red: 'bg-red-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    green: 'bg-green-400'
  }
};
```

Provide the theme to your Kaze provider

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Kaze } from 'kaze-ui'
import theme from "../styles";

ReactDOM.render(
  <Kaze theme={theme}>
    <App />
  </Kaze>,
  document.getElementById('root')
)
```

Use a Box component with a variant

```
import React from 'react';
import { Box } from 'kaze-ui';

const IndexPage: React.FC<Props> = () => {
  return (
    <Box variant="purple">
      Test Box component
    </Box>
  );
}
```

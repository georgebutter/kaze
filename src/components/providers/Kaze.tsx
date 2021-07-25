import * as React from 'react';
import {KazeTheme} from '@types';

export const KazeContext = React.createContext<KazeContextState>({
  theme: {
    components: {},
  },
});

/**
 * The Kaze theme context provider.
 * Pass you custom theme to have it applied across all components.
 * @return {React.FC<Props>}
 */
export const Kaze: React.FC<Props> = ({children, theme}) => (
  <KazeContext.Provider value={{theme}}>
    {children}
  </KazeContext.Provider>
);

type Props = {
  theme: KazeContextState['theme']
}

export type KazeContextState = {
  theme: KazeTheme
}

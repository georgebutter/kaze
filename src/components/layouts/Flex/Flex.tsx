import * as React from 'react';
import type {DefaultProps} from '../../../types/index.ts';
import {KazeContext} from '../../providers/Kaze.tsx';

/**
 * Returns a horizontal stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const Flex: React.FC<Props> = ({
  children,
  className = '',
  as = 'div',
  variant,
  direction = 'row',
  justify,
}) => {
  const {theme} = React.useContext(KazeContext);

  const classes = React.useMemo(() => {
    const {Flex} = theme.components;
    const base = `flex flex-${direction} ${
      justify ? `justify-${justify}` : ''
    }`;
    return `${Flex?.base || ''} ${Flex?.variants?.[variant] || ''} ${
      className || ''
    } ${base}`;
  }, [theme.components]);

  return React.createElement(
      as,
      {
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  direction?: 'row' | 'col';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
};

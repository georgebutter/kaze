import * as React from 'react';
import {DefaultProps} from '@types';
import {KazeContext} from '@providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const VStack: React.FC<Props> = ({
  children,
  className = '',
  as = 'div',
  variant,
  space = 0,
}) => {
  const {theme} = React.useContext(KazeContext);
  const {VStack} = theme.components;
  const base = `flex flex-col space-y-${space}`;
  const classes = `${VStack?.base || ''} ${VStack?.variants?.[variant] || ''} ${
    className || ''
  } ${base}`;
  return React.createElement(
      as,
      {
        className: classes,
      },
      children,
  );
};

type Props = DefaultProps<HTMLDivElement> & {
  /**
   * The amount of vertical spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  space?: number;
};

import * as React from 'react';
import {DefaultProps, GridCols} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a horizontal stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const HStack: React.FC<Props> = ({
  children, space = 0, className = '', as = 'div', variant
}) => {
  const {theme} = React.useContext(KazeContext);
  const {HStack} = theme.components
  const base = `flex flex-row space-x-${space}`;
  const classes = `${HStack?.base || ''} ${HStack?.variants?.[variant] || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  /**
   * The amount of horizontal spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  space?: GridCols;
}

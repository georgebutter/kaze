import * as React from 'react';
import {DefaultProps} from '../../kaze';
import {KazeContext} from '../../providers/Kaze';

/**
 * Returns a vertical stack component with an option for even spacing between
 * elements.
 * @return {React.FC<Props>}
 */
export const VStack: React.FC<Props> = ({
  children, className = '', as = 'div', space = 0,
}) => {
  const {theme} = React.useContext(KazeContext);
  const base = `flex flex-col space-y-${space}`;
  const classes = `${theme.components.VStack?.base || ''} ${className || ''} ${base}`;
  return React.createElement(as, {
    className: classes,
  }, children);
};

type Props = DefaultProps & {
  /**
   * The amount of vertical spacing between elements in the stack.
   * Value is based upon the tailwind config.
   * Default is 0;
   **/
  space?: number;
}
